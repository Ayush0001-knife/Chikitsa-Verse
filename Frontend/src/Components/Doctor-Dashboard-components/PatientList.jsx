import { Filter, MoreVertical, Plus, Search, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePatientTable } from "../Contexts/PatientTableContext";

const PatientList = ({
  searchTerm,
  setSearchTerm,
  selectedFilter,
  setSelectedFilter,
  patients,
}) => {
  // const { patients } = usePatientTable();

  const filteredPatients = patients.filter((p) => {
    const fullName = `${p.demographics?.first_name || ""} ${
      p.demographics?.last_name || ""
    }`.trim();

    const matchesSearch = fullName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // You don’t have `status` in your data → fallback to "pending" or something
    const status = p.status || "pending";

    const matchesFilter =
      selectedFilter === "all" || status.toLowerCase() === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "ACTIVE":
        return "bg-green-100 text-green-800 border-green-200";
      case "COMPLETED":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getAvatarColor = (name = "") => {
    const colors = [
      "bg-teal-500",
      "bg-blue-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];
    if (!name) return colors[0];
    return colors[name.charCodeAt(0) % colors.length];
  };

  const getAge = (dob) => {
    if (!dob) return "-";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="mb-8">
        <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col md:flex-col gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300"
              />
            </div>

            {/* Filters and Actions */}
            <div className="flex gap-3 items-center">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>

              <button className="p-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>

              <button
                className="px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                style={{ backgroundColor: "#4DB6AC" }}
                onClick={() => navigate("/add-patient")}
              >
                <Plus className="w-5 h-5" />
                Add Patient
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Patient List */}
      <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl shadow-2xl overflow-hidden">
        {/* Table Header */}
        <div
          className="px-8 py-6 border-b border-white/20"
          style={{ backgroundColor: "#1E3A5F" }}
        >
          <div className="grid grid-cols-12 gap-4 text-white font-semibold">
            <div className="col-span-4 md:col-span-3">Patient Name</div>
            <div className="col-span-2 hidden md:block">Gender</div>
            <div className="col-span-2">Age</div>
            <div className="col-span-2 hidden md:block">BMI</div>
            <div className="col-span-3 md:col-span-2">Status</div>
            <div className="col-span-3 md:col-span-1 text-right">Actions</div>
          </div>
        </div>

        {/* Patient Rows */}
        <div className="divide-y divide-white/10">
          {filteredPatients.map((patient, index) => (
            <div
              key={patient.id}
              className="px-8 py-6 hover:bg-white/20 transition-all duration-300 transform hover:translate-x-1 group"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "slideIn 0.6s ease-out forwards",
              }}
              onClick={() => navigate(`/patient-management`)}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Patient Name with Avatar */}
                <div className="col-span-4 md:col-span-3 flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${getAvatarColor(
                      patient.demographics?.first_name || ""
                    )} shadow-lg`}
                  >
                    {`${(patient.demographics?.first_name || "").charAt(0)}${(
                      patient.demographics?.last_name || ""
                    ).charAt(0)}`}
                  </div>

                  <div>
                    <div className="font-semibold text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                      {`${patient.demographics?.first_name || ""} ${
                        patient.demographics?.last_name || ""
                      }` || "-"}
                    </div>
                    <div className="text-sm text-gray-500">
                      Created At :{" "}
                      {patient.created_at
                        ? new Date(patient.created_at).toLocaleString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "N/A"}{" "}
                    </div>
                  </div>
                </div>

                {/* Gender */}
                <div className="col-span-2 hidden md:block text-gray-600">
                  {patient.demographics?.gender || "-"}
                </div>

                {/* Age */}
                <div className="col-span-2 text-gray-800 font-medium">
                  {getAge(patient.demographics?.date_of_birth)}
                </div>

                {/* BMI */}
                <div className="col-span-2 hidden md:block text-gray-600">
                  {patient.anthropometrics?.bmi || "-"}
                </div>

                {/* Status */}
                <div className="col-span-3 md:col-span-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getStatusColor(
                      patient.status
                    )}`}
                  >
                    {patient.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="col-span-3 md:col-span-1 flex justify-end">
                  <button className="p-2 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:rotate-90">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPatients.length === 0 && (
          <div className="px-8 py-16 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              No patients found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default PatientList;

import { useState } from "react";
import Navbar from "../Components/Doctor-Dashboard-components/Navbar";
import QuickActions from "../Components/Doctor-Dashboard-components/QuickActions";
import PatientTable from "../Components/Doctor-Dashboard-components/PatientTable";
import { getPatientsList } from "../Services/api";
import { useEffect } from "react";
import { useContext } from "react";
import { useAuthentication } from "../Components/Contexts/AuthenticationContext";

const DoctorDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [patients, setPatients] = useState([]);
  const doctorId = localStorage.getItem("doctorId");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        if (!doctorId) return; // Ensure doctorId is available
        console.log("Doctor ID:", doctorId);

        const data = await getPatientsList(doctorId); // Pass doctorId to your API service
        if (data.success) {
          setPatients(data.patients);
          console.log("Patients fetched:", data.patients);
        } else {
          console.error("Failed to fetch patients:", data.message);
        }
      } catch (err) {
        console.error("Error fetching patients:", err);
      }
    };

    fetchPatients();
  }, []);

  // useEffect(() => {
  //   getPatientsList(doctorId).then((data) => {
  //     setPatients(data.patients);
  //     console.log(data.patients);
  //   });
  // });

  return (
    <div className="min-h-screen bg-[#E0F7FA] ">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="pt-10 px-4 max-w-7xl mx-auto">
        <PatientTable
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
      <QuickActions />
    </div>
  );
};

export default DoctorDashboard;

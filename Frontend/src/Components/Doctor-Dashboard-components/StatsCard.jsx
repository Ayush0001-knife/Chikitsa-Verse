import React from "react";
import { usePatientTable } from "../Contexts/PatientTableContext";

const StatsCard = () => {
  const { patients } = usePatientTable();
  return (
    <div className="pt-28 px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  Patient Records
                </h2>
                <p className="text-gray-600">
                  Manage and monitor your patients efficiently
                </p>
              </div>

              {/* Stats Cards */}
              <div className="flex gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30 min-w-[120px]">
                  <div className="text-2xl font-bold text-gray-800">
                    {patients.length}
                  </div>
                  <div className="text-sm text-gray-600">Total Patients</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30 min-w-[120px]">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "#FFA726" }}
                  >
                    {patients.filter((p) => p.status === "PENDING").length}
                  </div>
                  <div className="text-sm text-gray-600">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

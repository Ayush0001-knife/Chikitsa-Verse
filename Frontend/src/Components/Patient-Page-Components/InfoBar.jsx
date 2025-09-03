import React from "react";

import { Phone, Activity, Heart, User } from "lucide-react";
import { usePatientPage } from "../Contexts/PatientPageContext";

const InfoBar = () => {
  const { patient } = usePatientPage();
  return (
    <div className="bg-white border-b border-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {patient.age} years, {patient.gender}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">BMI: {patient.bmi}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {patient.bloodGroup}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">{patient.phone}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span
              className={`px-3 py-1 ${
                patient.status === "ACTIVE" ? "bg-[#388E3C]" : "bg-red-500"
              } bg-opacity-10 rounded-full text-sm font-medium`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;

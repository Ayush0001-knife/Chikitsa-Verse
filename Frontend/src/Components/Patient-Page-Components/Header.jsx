import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MessageSquare } from "lucide-react";
import { usePatientPage } from "../Contexts/PatientPageContext";

const Header = () => {
  const navigate = useNavigate();

  const { patient } = usePatientPage();

  const goBack = () => {
    navigate("/doctor-dashboard");
  };

  return (
    <div className="bg-[#1E3A5F] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={goBack}
              className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {patient.initials}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{patient.name}</h1>
                <p className="text-blue-200">
                  Patient ID: #{patient.id.toString().padStart(4, "0")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right text-sm text-blue-200">
              <div>Last Visit: {patient.lastVisit}</div>
              <div>Next: {patient.nextAppointment}</div>
            </div>
            <button className="bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-xl transition-colors flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-black" />
              <span className="text-black">Schedule</span>
            </button>
            <button className="bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-xl transition-colors flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-black" />
              <span className="text-black">Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

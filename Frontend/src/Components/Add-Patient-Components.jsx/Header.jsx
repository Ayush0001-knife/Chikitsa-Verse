import { ArrowLeft, User } from "lucide-react";
import React from "react";
import { useAddPatient } from "../Contexts/AddPatientContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { formData } = useAddPatient();
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 backdrop-blur-2xl bg-white/80 border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110 cursor-pointer"
              onClick={() => navigate("/doctor-dashboard")}
            >
              <ArrowLeft className="w-6 h-6" style={{ color: "#1E3A5F" }} />
            </button>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: "#1E3A5F" }}>
                Add New Patient
              </h1>
              <p className="text-gray-600">Complete patient information form</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm text-gray-500">Progress</div>
              <div className="text-lg font-bold" style={{ color: "#4DB6AC" }}>
                {Math.round(
                  (Object.values(formData).filter((val) => val !== "").length /
                    Object.keys(formData).length) *
                    100
                )}
                %
              </div>
            </div>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#4DB6AC" }}
            >
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              backgroundColor: "#4DB6AC",
              width: `${
                (Object.values(formData).filter((val) => val !== "").length /
                  Object.keys(formData).length) *
                100
              }%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { FileText, Activity, BarChart3, Stethoscope } from "lucide-react";
import { usePatientPage } from "../Contexts/PatientPageContext";

const TabNavigation = () => {
  const { activeTab, setActiveTab } = usePatientPage();
  return (
    <div className="bg-white border-b border-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-8">
          {[
            { id: "dashboard", label: "Dashboard", icon: BarChart3 },
            { id: "reports", label: "Reports", icon: FileText },
            { id: "vitals", label: "Vitals", icon: Activity },
            { id: "treatment", label: "Treatment", icon: Stethoscope },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${
                activeTab === tab.id
                  ? "border-[#1E3A5F] text-[#1E3A5F]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;

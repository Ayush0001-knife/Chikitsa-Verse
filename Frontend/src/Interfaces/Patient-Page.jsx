import React from "react";

import Header from "../Components/Patient-Page-Components/Header";
import InfoBar from "../Components/Patient-Page-Components/InfoBar";
import MainContent from "../Components/Patient-Page-Components/MainContent";
import TabNavigation from "../Components/Patient-Page-Components/TabNavigation";

const PatientProfile = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-['Poppins']">
      {/* Header */}
      <Header />

      {/* Patient Info Bar */}
      <InfoBar />

      {/* Tab Navigation */}
      <TabNavigation />

      {/* Main Content */}
      <MainContent />
    </div>
  );
};

export default PatientProfile;

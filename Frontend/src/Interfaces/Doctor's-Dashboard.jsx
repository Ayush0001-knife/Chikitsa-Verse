import { useState } from "react";
import Navbar from "../Components/Doctor-Dashboard-components/Navbar";
import QuickActions from "../Components/Doctor-Dashboard-components/QuickActions";
import PatientTable from "../Components/Doctor-Dashboard-components/PatientTable";

const DoctorDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

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

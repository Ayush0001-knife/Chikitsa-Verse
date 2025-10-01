import React from "react";
import PatientList from "./PatientList";
import StatsCard from "./StatsCard";

const PatientTable = ({
  searchTerm,
  setSearchTerm,
  selectedFilter,
  setSelectedFilter,
  patients,
}) => {
  return (
    <>
      <StatsCard />
      <PatientList
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        patients={patients}
      />
    </>
  );
};

export default PatientTable;

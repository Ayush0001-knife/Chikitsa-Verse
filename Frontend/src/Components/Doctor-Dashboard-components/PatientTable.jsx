import React from "react";
import PatientList from "./PatientList";
import StatsCard from "./StatsCard";

const PatientTable = ({
  searchTerm,
  setSearchTerm,
  selectedFilter,
  setSelectedFilter,
}) => {
  return (
    <>
      <StatsCard />
      <PatientList
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </>
  );
};

export default PatientTable;

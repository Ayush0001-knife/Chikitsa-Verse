import React from "react";
import DoctorDashboard from "./Interfaces/Doctor's-Dashboard";
import AddPatient from "./Interfaces/AddPatient";
import { Routes, Route } from "react-router-dom";
import PatientManagement from "./Interfaces/Patient-Page";
import ChikitsaVerseLanding from "./Interfaces/LandingPage";
import AuthPages from "./Interfaces/Authentication";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChikitsaVerseLanding />} />
        <Route path="/auth" element={<AuthPages />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/patient-management" element={<PatientManagement />} />
      </Routes>
    </>
  );
};

export default App;

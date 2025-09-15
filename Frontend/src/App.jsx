import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DoctorDashboard from "./Interfaces/Doctor's-Dashboard";
import AddPatient from "./Interfaces/AddPatient";
import PatientManagement from "./Interfaces/Patient-Page";
import ChikitsaVerseLanding from "./Interfaces/LandingPage";
import AuthPages from "./Interfaces/Authentication";

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<ChikitsaVerseLanding />} />
      <Route path="/auth" element={<AuthPages />} />

      {/* Protected Routes */}
      <Route
        path="/doctor-dashboard"
        element={
          <ProtectedRoute>
            <DoctorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-patient"
        element={
          <ProtectedRoute>
            <AddPatient />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient-management"
        element={
          <ProtectedRoute>
            <PatientManagement />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;

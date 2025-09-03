import { createContext } from "react";

const PatientManagementContext = createContext();

export const PatientManagementProvider = ({ children }) => {
  return (
    <PatientManagementContext.Provider value={{}}>
      {children}
    </PatientManagementContext.Provider>
  );
};

export const usePatientManagement = () => useContext(PatientManagementContext);

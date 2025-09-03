import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "../Contexts/NavContext";
import { AddPatientProvider } from "../Contexts/AddPatientContext";
import { PatientTableProvider } from "./PatientTableContext";
import { AuthenticationProvider } from "./AuthenticationContext";
import { PatientPageProvider } from "./PatientPageContext";

export default function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <PatientPageProvider>
        <AuthenticationProvider>
          <PatientTableProvider>
            <AddPatientProvider>
              <NavProvider>{children}</NavProvider>
            </AddPatientProvider>
          </PatientTableProvider>
        </AuthenticationProvider>
      </PatientPageProvider>
    </BrowserRouter>
  );
}

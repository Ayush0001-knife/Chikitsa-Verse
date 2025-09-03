import { createContext, useState, useContext } from "react";

const PatientTableContext = createContext();

export const PatientTableProvider = ({ children }) => {
  const [patients] = useState([
    {
      id: 1,
      name: "Roberto Massay",
      gender: "Male",
      age: 30,
      bmi: null,
      status: "PENDING",
      avatar: "RM",
      lastVisit: "2024-08-10",
    },
    {
      id: 7,
      name: "Sarah Johnson",
      gender: "Female",
      age: 28,
      bmi: 22.5,
      status: "ACTIVE",
      avatar: "SJ",
      lastVisit: "2024-08-12",
    },
    {
      id: 8,
      name: "Michael Chen",
      gender: "Male",
      age: 42,
      bmi: 26.3,
      status: "COMPLETED",
      avatar: "MC",
      lastVisit: "2024-08-11",
    },
    {
      id: 9,
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      bmi: 24.2,
      status: "ACTIVE",
      avatar: "ED",
      lastVisit: "2024-08-13",
    },
    {
      id: 10,
      name: "David Wilson",
      gender: "Male",
      age: 45,
      bmi: 27.5,
      status: "ACTIVE",
      avatar: "DW",
      lastVisit: "2024-08-14",
    },
    {
      id: 11,
      name: "Jessica Taylor",
      gender: "Female",
      age: 32,
      bmi: 23.8,
      status: "ACTIVE",
      avatar: "JT",
      lastVisit: "2024-08-15",
    },
    {
      id: 12,
      name: "Christopher Lee",
      gender: "Male",
      age: 50,
      bmi: 29.5,
      status: "ACTIVE",
      avatar: "CL",
      lastVisit: "2024-08-16",
    },
    {
      id: 13,
      name: "Amanda Brown",
      gender: "Female",
      age: 25,
      bmi: 21.8,
      status: "ACTIVE",
      avatar: "AB",
      lastVisit: "2024-08-17",
    },
  ]);
  return (
    <PatientTableContext.Provider value={{ patients }}>
      {children}
    </PatientTableContext.Provider>
  );
};

export const usePatientTable = () => useContext(PatientTableContext);

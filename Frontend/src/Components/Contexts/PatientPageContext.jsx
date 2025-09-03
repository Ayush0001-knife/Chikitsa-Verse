import { AlertTriangle, Clock, Heart } from "lucide-react";
import { createContext, useContext, useState } from "react";

const PatientPageContext = createContext();

export const PatientPageProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [patient] = useState({
    id: 1,
    name: "Roberto Massay",
    initials: "RM",
    birthDate: "15/03/1994",
    email: "roberto.massay@gmail.com",
    phone: "+91 9876543210",
    age: 30,
    gender: "Male",
    bloodGroup: "O+",
    height: "175 cm",
    weight: "75 kg",
    bmi: 24.5,
    exercisePerWeek: "5 hr",
    vo2Max: 45,
    sleepPerNight: "7 hr",
    stepsPerDay: 8500,
    lastVisit: "10/08/2024",
    nextAppointment: "25/08/2024",
    status: "ACTIVE",
    emergencyContact: "+91 9876543211",
    allergies: ["Penicillin", "Shellfish"],
    currentMedications: ["Metformin 500mg", "Lisinopril 10mg"],
    healthScores: {
      nutrition: { value: 85, status: "good" },
      exercise: { value: 78, status: "good" },
      mentalHealth: { value: 92, status: "good" },
      sleepQuality: { value: 88, status: "good" },
    },
    preventionAlerts: [
      {
        id: 1,
        type: "warning",
        message: "Due for annual health checkup",
        priority: "medium",
      },
      {
        id: 2,
        type: "warning",
        message: "Cholesterol levels need monitoring",
        priority: "medium",
      },
      {
        id: 3,
        type: "critical",
        message: "Blood pressure trending higher",
        priority: "high",
      },
    ],
    vitalSigns: {
      bloodPressure: "140/90",
      heartRate: "78 bpm",
      temperature: "98.6°F",
      oxygenSaturation: "98%",
    },
    reports: [
      {
        id: 1,
        name: "Blood Test Analysis",
        date: "15/08/2024",
        type: "Laboratory",
        status: "Generated",
        score: 95,
        aiInsights:
          "Elevated glucose levels detected. HbA1c at 7.2% indicates diabetes management needs adjustment. Recommend medication review.",
        keyFindings: [
          "Glucose: 180 mg/dL (High)",
          "HbA1c: 7.2% (Elevated)",
          "Cholesterol: 220 mg/dL (Borderline)",
        ],
        recommendations: [
          "Increase Metformin dosage",
          "Add cardio exercise",
          "Dietary consultation recommended",
        ],
      },
      {
        id: 2,
        name: "ECG Report",
        date: "10/08/2024",
        type: "Cardiology",
        status: "Uploaded",
        score: 88,
        aiInsights:
          "Normal sinus rhythm with slight irregularities. Consider Holter monitoring for comprehensive cardiac assessment.",
        keyFindings: [
          "Normal sinus rhythm",
          "Heart rate: 78 bpm",
          "Slight T-wave changes",
        ],
        recommendations: [
          "24-hour Holter monitoring",
          "Cardiology consultation",
          "Continue cardiac medications",
        ],
      },
      {
        id: 3,
        name: "Chest X-Ray Analysis",
        date: "08/08/2024",
        type: "Radiology",
        status: "Generated",
        score: 92,
        aiInsights:
          "Chest X-ray shows clear lung fields with no signs of infection or abnormal masses. Heart size within normal limits.",
        keyFindings: [
          "Clear lung fields",
          "Normal heart size",
          "No abnormal masses",
        ],
        recommendations: [
          "Continue current treatment",
          "Regular follow-up recommended",
        ],
      },
    ],
    treatmentPlan: {
      shortTerm: [
        "Monitor blood glucose daily",
        "Medication compliance review",
        "Diet modification",
      ],
      longTerm: [
        "Weight reduction by 10%",
        "HbA1c target below 7%",
        "Blood pressure control",
      ],
    },
  });

  const getHealthScoreColor = (score) => {
    if (score >= 80) return "text-[#388E3C]";
    if (score >= 60) return "text-[#FFA726]";
    return "text-red-500";
  };

  const getHealthScoreBg = (score) => {
    if (score >= 80) return "bg-[#388E3C]";
    if (score >= 60) return "bg-[#FFA726]";
    return "bg-red-500";
  };

  const getAlertColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50";
      case "medium":
        return "border-l-[#FFA726] bg-orange-50";
      default:
        return "border-l-blue-500 bg-blue-50";
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "critical":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-[#FFA726]" />;
      default:
        return <Clock className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <PatientPageContext.Provider
      value={{
        activeTab,
        setActiveTab,
        patient,
        getHealthScoreColor,
        getHealthScoreBg,
        getAlertColor,
        getAlertIcon,
      }}
    >
      {children}
    </PatientPageContext.Provider>
  );
};

export const usePatientPage = () => useContext(PatientPageContext);

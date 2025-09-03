// src/context/PatientFormContext.js
import { createContext, useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  User,
  Heart,
  Activity,
  Utensils,
  TestTube,
  Brain,
  Dumbbell,
  Upload,
  Calendar,
  Phone,
  Ruler,
  Weight,
  Droplets,
  Clock,
  ChevronDown,
  Mail,
  Stethoscope,
} from "lucide-react";
import { addPatient } from "../../Services/api";

const AddPatientContext = createContext();

export const AddPatientProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState({ 0: true });
  const [formData, setFormData] = useState({
    // Demographics
    first_name: "Aarav",
    last_name: "Sharma",
    gender: "Male",
    date_of_birth: "1998-06-15",
    contact_number: "9876543210",
    email: "aarav.sharma@example.com",

    // Anthropometrics
    height: "168",
    weight: "62",
    bmi: "22.0",
    waist_circumference: "78",
    hip_circumference: "90",
    waist_to_hip_ratio: "0.87",

    // Cardiorespiratory
    vo2_max: "40",
    blood_pressure_systolic: "118",
    blood_pressure_diastolic: "76",
    resting_heart_rate: "70",
    oxygen_saturation: "97",
    respiratory_rate: "15",
    pulse_rate: "70",

    // Nutrition
    dietary_preference: "Vegetarian",
    daily_meal_count: "4",
    water_intake_liters: "3.0",
    calorie_intake_estimate: "2100",
    protein_intake: "75",
    fibre_intake: "30",

    // Blood Tests
    blood_group: "B+",
    fasting_blood_sugar: "90",
    hba1c: "5.2",
    cholesterol_total: "175",
    hdl: "55",
    ldl: "100",
    triglycerides: "140",

    // Mental Health
    stress_level: "3",
    sleep_quality_hours: "8",
    mood: "Calm",
    energy_level: "8",
    focus_level: "7",
    anxiety_level: "2",

    // Exercise
    exercise_frequency: "5",
    exercise_type: "Cardio + Yoga",
    exercise_duration_minutes: "50",
    average_daily_steps: "9000",
    intensity_level: "Medium",
    weekly_active_hours: "7",

    // Clinical Details
    allergies: "Peanuts",
    current_medications: "Vitamin D supplements",
    analysis_report: null,

    created_by: "2",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const sections = [
    {
      title: "Demographics",
      icon: User,
      color: "#4DB6AC",
      fields: [
        {
          name: "first_name",
          label: "First Name",
          type: "text",
          required: true,
          icon: User,
        },
        {
          name: "last_name",
          label: "Last Name",
          type: "text",
          required: true,
          icon: User,
        },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: ["Male", "Female", "Other"],
          required: true,
        },
        {
          name: "date_of_birth",
          label: "Date of Birth",
          type: "date",
          required: true,
          icon: Calendar,
        },
        {
          name: "contact_number",
          label: "Contact Number",
          type: "tel",
          required: true,
          icon: Phone,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          icon: Mail,
        },
      ],
    },
    {
      title: "Anthropometrics",
      icon: Ruler,
      color: "#388E3C",
      fields: [
        {
          name: "height",
          label: "Height",
          type: "number",
          unit: "cm",
          icon: Ruler,
        },
        {
          name: "weight",
          label: "Weight",
          type: "number",
          unit: "kg",
          icon: Weight,
        },
        {
          name: "bmi",
          label: "BMI",
          type: "number",
          unit: "kg/m²",
          readonly: true,
        },
        {
          name: "waist_circumference",
          label: "Waist Circumference",
          type: "number",
          unit: "cm",
        },
        {
          name: "hip_circumference",
          label: "Hip Circumference",
          type: "number",
          unit: "cm",
        },
        {
          name: "waist_to_hip_ratio",
          label: "Waist to Hip Ratio",
          type: "number",
          readonly: true,
        },
      ],
    },
    {
      title: "Cardiorespiratory",
      icon: Heart,
      color: "#FFA726",
      fields: [
        {
          name: "vo2_max",
          label: "VO2 Max",
          type: "number",
          unit: "ml/kg/min",
          icon: Heart,
        },
        {
          name: "blood_pressure_systolic",
          label: "Systolic BP",
          type: "number",
          unit: "mmHg",
          icon: Heart,
        },
        {
          name: "blood_pressure_diastolic",
          label: "Diastolic BP",
          type: "number",
          unit: "mmHg",
          icon: Heart,
        },
        {
          name: "resting_heart_rate",
          label: "Resting Heart Rate",
          type: "number",
          unit: "bpm",
          icon: Activity,
        },
        {
          name: "oxygen_saturation",
          label: "Oxygen Saturation",
          type: "number",
          unit: "%",
        },
        {
          name: "respiratory_rate",
          label: "Respiratory Rate",
          type: "number",
          unit: "breaths/min",
        },
        {
          name: "pulse_rate",
          label: "Pulse Rate",
          type: "number",
          unit: "bpm",
        },
      ],
    },
    {
      title: "Nutrition",
      icon: Utensils,
      color: "#8BC34A",
      fields: [
        {
          name: "dietary_preference",
          label: "Dietary Preference",
          type: "select",
          options: ["Vegetarian", "Non-Vegetarian", "Vegan", "Pescatarian"],
          icon: Utensils,
        },
        { name: "daily_meal_count", label: "Daily Meal Count", type: "number" },
        {
          name: "water_intake_liters",
          label: "Water Intake",
          type: "number",
          unit: "liters",
          icon: Droplets,
        },
        {
          name: "calorie_intake_estimate",
          label: "Calorie Intake",
          type: "number",
          unit: "kcal/day",
        },
        {
          name: "protein_intake",
          label: "Protein Intake",
          type: "number",
          unit: "g/day",
        },
        {
          name: "fibre_intake",
          label: "Fibre Intake",
          type: "number",
          unit: "g/day",
        },
        {
          name: "allergy",
          label: "Allergies",
          type: "text",
        },
        {
          name: "current_medications",
          label: "Current Medications",
          type: "text",
        },
      ],
    },
    {
      title: "Blood Tests",
      icon: TestTube,
      color: "#E91E63",
      fields: [
        {
          name: "blood_group",
          label: "Blood Group",
          type: "select",
          options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
          icon: TestTube,
        },
        {
          name: "fasting_blood_sugar",
          label: "Fasting Blood Sugar",
          type: "number",
          unit: "mg/dL",
          icon: TestTube,
        },
        { name: "hba1c", label: "HbA1c", type: "number", unit: "%" },
        {
          name: "cholesterol_total",
          label: "Total Cholesterol",
          type: "number",
          unit: "mg/dL",
        },
        {
          name: "hdl",
          label: "HDL Cholesterol",
          type: "number",
          unit: "mg/dL",
        },
        {
          name: "ldl",
          label: "LDL Cholesterol",
          type: "number",
          unit: "mg/dL",
        },
        {
          name: "triglycerides",
          label: "Triglycerides",
          type: "number",
          unit: "mg/dL",
        },
      ],
    },
    {
      title: "Mental Health",
      icon: Brain,
      color: "#9C27B0",
      fields: [
        {
          name: "stress_level",
          label: "Stress Level",
          type: "range",
          min: 1,
          max: 10,
          icon: Brain,
        },
        {
          name: "sleep_quality_hours",
          label: "Sleep Hours",
          type: "number",
          unit: "hours/night",
          icon: Clock,
        },
        {
          name: "mood",
          label: "Mood",
          type: "select",
          options: [
            "Happy",
            "Neutral",
            "Sad",
            "Anxious",
            "Excited",
            "Frustrated",
          ],
        },
        {
          name: "energy_level",
          label: "Energy Level",
          type: "range",
          min: 1,
          max: 10,
        },
        {
          name: "focus_level",
          label: "Focus Level",
          type: "range",
          min: 1,
          max: 10,
        },
        {
          name: "anxiety_level",
          label: "Anxiety Level",
          type: "range",
          min: 1,
          max: 10,
        },
      ],
    },
    {
      title: "Exercise",
      icon: Dumbbell,
      color: "#FF5722",
      fields: [
        {
          name: "exercise_frequency",
          label: "Exercise Frequency",
          type: "number",
          unit: "days/week",
          icon: Dumbbell,
        },
        {
          name: "exercise_type",
          label: "Exercise Type",
          type: "select",
          options: [
            "Cardio",
            "Strength Training",
            "Yoga",
            "Pilates",
            "Swimming",
            "Running",
            "Cycling",
          ],
        },
        {
          name: "exercise_duration_minutes",
          label: "Exercise Duration",
          type: "number",
          unit: "minutes",
        },
        {
          name: "average_daily_steps",
          label: "Daily Steps",
          type: "number",
          unit: "steps",
        },
        {
          name: "intensity_level",
          label: "Intensity Level",
          type: "select",
          options: ["Low", "Medium", "High"],
        },
        {
          name: "weekly_active_hours",
          label: "Weekly Active Hours",
          type: "number",
          unit: "hours",
        },
      ],
    },
    {
      title: "Report Upload",
      icon: Upload,
      color: "#607D8B",
      fields: [],
    },
  ];

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-calculate BMI
    if (name === "height" || name === "weight") {
      const height = name === "height" ? value : formData.height;
      const weight = name === "weight" ? value : formData.weight;
      if (height && weight) {
        const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
        setFormData((prev) => ({ ...prev, bmi }));
      }
    }

    // Auto-calculate waist to hip ratio
    if (name === "waist_circumference" || name === "hip_circumference") {
      const waist =
        name === "waist_circumference" ? value : formData.waist_circumference;
      const hip =
        name === "hip_circumference" ? value : formData.hip_circumference;
      if (waist && hip) {
        const ratio = (waist / hip).toFixed(2);
        setFormData((prev) => ({ ...prev, waist_to_hip_ratio: ratio }));
      }
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      setFormData((prev) => ({ ...prev, analysis_report: file }));
    }
  };

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const validateSection = (sectionIndex) => {
    const section = sections[sectionIndex];
    const sectionErrors = {};

    section.fields?.forEach((field) => {
      if (field.required && !formData[field.name]) {
        sectionErrors[field.name] = `${field.label} is required`;
      }
    });

    return sectionErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let allErrors = {};
    sections.forEach((section, index) => {
      const sectionErrors = validateSection(index);
      allErrors = { ...allErrors, ...sectionErrors };
    });

    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      // Build multipart form data
      const formDataToSend = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === "analysis_report" && uploadedFile) {
          formDataToSend.append("analysis_report", uploadedFile); // actual file
        } else {
          formDataToSend.append(key, value);
        }
      });

      // send request (make sure your addPatient in api.js handles FormData)
      const response = await addPatient(formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.success) {
        navigate("/doctor-dashboard");
      } else {
        setErrors({ submit: "Failed to add patient" });
      }
    } catch (err) {
      console.error("Error adding patient:", err);
      setErrors({ submit: "An error occurred while adding patient" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field) => {
    const hasError = errors[field.name];

    switch (field.type) {
      case "select":
        return (
          <div key={field.name} className="group">
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: "#1E3A5F" }}
            >
              {field.label}{" "}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
              <select
                value={formData[field.name]}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className={`w-full px-4 py-3 bg-white border-2 rounded-xl transition-all duration-300 focus:outline-none appearance-none ${
                  hasError
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-[#4DB6AC] focus:shadow-lg focus:shadow-teal-100/50"
                }`}
                style={{ color: "#1E3A5F" }}
              >
                <option value="">Select {field.label}</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              {!hasError && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-teal-400/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              )}
            </div>
            {hasError && (
              <p className="text-red-500 text-sm mt-1 animate-pulse">
                {hasError}
              </p>
            )}
          </div>
        );

      case "range":
        return (
          <div key={field.name} className="group">
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: "#1E3A5F" }}
            >
              {field.label}:{" "}
              <span className="font-bold text-teal-600">
                {formData[field.name]}
              </span>
            </label>
            <div className="relative">
              <input
                type="range"
                min={field.min}
                max={field.max}
                value={formData[field.name]}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #4DB6AC 0%, #4DB6AC ${
                    ((formData[field.name] - field.min) /
                      (field.max - field.min)) *
                    100
                  }%, #e5e7eb ${
                    ((formData[field.name] - field.min) /
                      (field.max - field.min)) *
                    100
                  }%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{field.min}</span>
                <span>{field.max}</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div key={field.name} className="group">
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: "#1E3A5F" }}
            >
              {field.label}{" "}
              {field.required && <span className="text-red-500">*</span>}
              {field.unit && (
                <span className="text-gray-500 font-normal">
                  {" "}
                  ({field.unit})
                </span>
              )}
            </label>
            <div className="relative">
              {field.icon && (
                <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              )}
              <input
                type={field.type}
                value={formData[field.name]}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                readOnly={field.readonly}
                className={`w-full ${
                  field.icon ? "pl-12" : "pl-4"
                } pr-4 py-3 bg-white border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                  field.readonly
                    ? "bg-gray-50 cursor-not-allowed"
                    : hasError
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-[#4DB6AC] focus:shadow-lg focus:shadow-teal-100/50"
                }`}
                style={{ color: "#1E3A5F" }}
                placeholder={`Enter ${field.label.toLowerCase()}`}
              />
              {!hasError && !field.readonly && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-teal-400/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              )}
            </div>
            {hasError && (
              <p className="text-red-500 text-sm mt-1 animate-pulse">
                {hasError}
              </p>
            )}
          </div>
        );
    }
  };

  return (
    <AddPatientContext.Provider
      value={{
        sections,
        handleInputChange,
        handleSubmit,
        renderField,
        formData,
        setFormData,
        expandedSections,
        setExpandedSections,
        toggleSection,
        uploadedFile,
        setUploadedFile,
        fileInputRef,
        handleFileUpload,
        currentSection,
        setCurrentSection,
        validateSection,
        isSubmitting,
      }}
    >
      {children}
    </AddPatientContext.Provider>
  );
};

export const useAddPatient = () => useContext(AddPatientContext);

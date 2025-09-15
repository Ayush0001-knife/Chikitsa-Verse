const doctorServices = require("../services/Doctor.service");
const doctorModel = require("../models/Doctor.model");
const { validationResult } = require("express-validator");
const patientServices = require("../services/Patient.service");
const addPatientModel = require("../models/PatientData.model");
const Tesseract = require("tesseract.js");
const pdfPoppler = require("pdf-poppler");
const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");



module.exports.registerDoctor = async (req, res) => {
  console.log("Incoming request body:", req.body); // 👈 debug log

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation errors:", errors.array());
    return res.status(400).json({
      message: "Validation failed",
      errors: errors.array(),
    });
  }

  const { firstName, lastName, email, password } = req.body;

  const existingDoctor = await doctorModel.findOne({ email });
  if (existingDoctor) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  const hashedPassword = await doctorModel.hashPassword(password);

  const doctor = await doctorServices.createDoctor({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  const token = doctor.generateAuthToken();

  res.status(201).json({
    success: true,
    message: "Doctor created successfully",
    token,
    doctor,
  });
};

module.exports.loginUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Login failed",
      errors: errors.array(),
    });
  }

  const { email, password } = req.body;

  const doctor = await doctorModel.findOne({ email }).select("+password");
  if (!doctor) {
    return res.status(400).json({
      success: false,
      message: "Invalid email",
    });
  }

  const isMatch = await doctor.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid password",
    });
  }

  const token = doctor.generateAuthToken();
  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
    doctor,
  });
};

module.exports.addPatient = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const {
      created_by,
      first_name,
      last_name,
      gender,
      date_of_birth,
      contact_number,
      email,
      height,
      weight,
      bmi,
      waist_circumference,
      hip_circumference,
      waist_to_hip_ratio,
      blood_pressure_systolic,
      blood_pressure_diastolic,
      resting_heart_rate,
      oxygen_saturation,
      respiratory_rate,
      dietary_preference,
      daily_meal_count,
      water_intake_liters,
      blood_group,
      fasting_blood_sugar,
      hba1c,
      stress_level,
      sleep_quality_hours,
      mood,
      exercise_frequency,
      exercise_type,
      exercise_duration_minutes,
    } = req.body;

    // Generate patient_id
    const patient_id = await addPatientModel.generatePatientId(contact_number);
    // Generate report_id 
    const report_id = await addPatientModel.generateReportId(patient_id);

    // Prepare report metadata if a file was uploaded
    let reportData = null;
    if (req.file) {
      reportData = {
        report_id,
        file_name: req.file.originalname,
        file_type: req.file.mimetype,
        file_data: req.file.buffer,
        file_url: `/reports/${patient_id}`, // 🔑 ensure Multer saves file to /uploads
        uploaded_at: new Date(),
      };
    }


    // Create patient with or without report
    const patient = await patientServices.createPatient({
      patient_id,
      created_by,
      first_name,
      last_name,
      gender,
      date_of_birth,
      contact_number,
      email,
      height,
      weight,
      bmi,
      waist_circumference,
      hip_circumference,
      waist_to_hip_ratio,
      blood_pressure_systolic,
      blood_pressure_diastolic,
      resting_heart_rate,
      oxygen_saturation,
      respiratory_rate,
      dietary_preference,
      daily_meal_count,
      water_intake_liters,
      blood_group,
      fasting_blood_sugar,
      hba1c,
      stress_level,
      sleep_quality_hours,
      mood,
      exercise_frequency,
      exercise_type,
      exercise_duration_minutes,
      reports: reportData ? [reportData] : [],
    });

    res.status(201).json({
      success: true,
      message: "Patient added successfully",
      patient,
    });
  } catch (err) {
    console.error("Error adding patient:", err);
    res.status(500).json({
      success: false,
      message: "Error adding patient",
      error: err.message,
    });
  }
};

module.exports.getPatientsList = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const patients = await addPatientModel.find({ created_by: doctorId });
    res.status(200).json({
      success: true,
      message: "Patients list fetched successfully", 
      patients,
    });
  } catch (err) {
    console.error("Error fetching patients list:", err);
    res.status(500).json({
      success: false,
      message: "Error fetching patients list",
      error: err.message,
    });
  }
};

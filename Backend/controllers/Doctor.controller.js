const doctorServices = require("../services/Doctor.service");
const doctorModel = require("../models/Doctor.model");
const { validationResult } = require("express-validator");
const patientServices = require("../services/Patient.service");
const addPatientModel = require("../models/PatientData.model");

module.exports.registerDoctor = async (req, res) => {
    console.log("Incoming request body:", req.body);  // 👈 debug log

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  console.log("Validation errors:", errors.array());
  return res.status(400).json({ 
    message: "Validation failed",
    errors: errors.array()
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
    reports,
  } = req.body;

console.log(req.body.reports);

  const patient_id = addPatientModel.generatePatientId(contact_number);

  const patient = await patientServices.createPatient({
    patient_id: patient_id,
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
  reports: reports || [], 
  });

 res.status(201).json({
    success: true,
    message: "Patient added successfully",
    patient,
  });};

const addPatientModel = require("../models/PatientData.model");

module.exports.createPatient = async ({
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
  reports,
}) => {
  if (
    !first_name ||
    !last_name ||
    !gender ||
    !date_of_birth ||
    !contact_number ||
    !email
  ) {
    throw new Error(
      "First name, last name, gender, date of birth, contact number, and email are required"
    );
  }

const patient = await addPatientModel.create({
  patient_id,
  created_by,
  demographics: {
    first_name,
    last_name,
    gender,
    date_of_birth,
    contact_number,
    email
  },
  anthropometrics: {
    height,
    weight,
    waist_circumference,
    hip_circumference,
    bmi,
    waist_to_hip_ratio
  },
  cardiorespiratory: {
    blood_pressure_systolic,
    blood_pressure_diastolic,
    resting_heart_rate,
    oxygen_saturation,
    respiratory_rate
  },
  nutrition: {
    dietary_preference,
    daily_meal_count,
    water_intake_liters
  },
  blood_tests: {
    blood_group,
    fasting_blood_sugar,
    hba1c
  },
  mental_health: {
    stress_level,
    sleep_quality_hours,
    mood
  },
  exercise: {
    exercise_frequency,
    exercise_type,
    exercise_duration_minutes
  },
reports,
});
    return patient;
};

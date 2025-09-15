const mongoose = require("mongoose");

const patientDataSchema = new mongoose.Schema({
    patient_id: {
        type: Number,
        required: true,
        length: 10,
        unique: true
    },
    created_by: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    demographics: {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true
        },
        date_of_birth: {
            type: Date,
            required: true
        },
        contact_number: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    anthropometrics: {
        height: {
            type: Number
        },
        weight: {
            type: Number
        },
        bmi: {
            type: Number
        },
        waist_circumference: {
            type: Number
        },
        hip_circumference: {
            type: Number
        },
        waist_to_hip_ratio: {
            type: Number
        }
    },

    cardiorespiratory: {
        vo2_max: {
            type: Number
        },
        blood_pressure_systolic: {
            type: Number
        },
        blood_pressure_diastolic: {
            type: Number
        },
        resting_heart_rate: {
            type: Number
        },
        oxygen_saturation: {
            type: Number
        },
        respiratory_rate: {
            type: Number
        },
        pulse_rate: {
            type: Number
        }
    },

    nutrition: {
        dietary_preference: {
            type: String,
            enum: ["Vegetarian", "Non-Vegetarian", "Vegan", "Pescatarian"]
        },
        daily_meal_count: {
            type: Number
        },
        water_intake_liters: {
            type: Number
        },
        calorie_intake_estimate: {
            type: Number
        },
        protein_intake: {
            type: Number
        },
        fibre_intake: {
            type: Number
        },
        allergies: {
            type: String
        },
        current_medications: {
            type: String
        }
    },

    blood_tests: {
        blood_group: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
        },
        fasting_blood_sugar: {
            type: Number
        },
        hba1c: {
            type: Number
        },
        cholesterol_total: {
            type: Number
        },
        hdl: {
            type: Number
        },
        ldl: {
            type: Number
        },
        triglycerides: {
            type: Number
        }
    },

    mental_health: {
        stress_level: {
            type: Number,
            min: 1,
            max: 10
        },
        sleep_quality_hours: {
            type: Number
        },
        mood: {
            type: String,
            enum: ["Happy", "Neutral", "Sad", "Anxious", "Excited", "Frustrated"]
        },
        energy_level: {
            type: Number,
            min: 1,
            max: 10
        },
        focus_level: {
            type: Number,
            min: 1,
            max: 10
        },
        anxiety_level: {
            type: Number,
            min: 1,
            max: 10
        }
    },
    exercise: {
        exercise_frequency: {
            type: Number
        },
        exercise_type: {
            type: String,
            enum: ["Cardio", "Strength Training", "Yoga", "Pilates", "Swimming", "Running", "Cycling"]
        },
        exercise_duration_minutes: {
            type: Number
        },
        average_daily_steps: {
            type: Number
        },
        intensity_level: {
            type: String,
            enum: ["Low", "Medium", "High"]
        },
        weekly_active_hours: {
            type: Number
        }
    },
    
    reports: [
        {
            report_id: {
                type: Number,
                required: true
            },
            file_name: {
                type: String
            },
            file_type:{
                type: String
            },
            file_data: {
                type: Buffer
            },
            file_url: {
                type: String
            },      
            upload_date: { type: Date, default: Date.now }
        }
    ],   
});

patientDataSchema.statics.generatePatientId = function (contactNumber) {
  const randomPart = Math.floor(10000 + Math.random() * 90000);
  const contactPart = contactNumber.slice(-5);
  return parseInt(`${randomPart}${contactPart}`);
};

patientDataSchema.statics.generateReportId = function (patientId) {
  const patientPart = String(patientId).slice(0, 5);
  const randomPart = Math.floor(10000 + Math.random() * 90000);
  return parseInt(`${patientPart}${randomPart}`);
};

const addPatientModel = mongoose.model("Patients", patientDataSchema);

module.exports = addPatientModel;
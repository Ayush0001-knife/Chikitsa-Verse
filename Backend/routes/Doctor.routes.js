const express = require("express");
const { body } = require("express-validator");
const multer = require("multer");
const authMiddleware = require("../middlewares/authMiddleware");
const doctorController = require("../controllers/Doctor.controller");

const doctorRouter = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });



doctorRouter.post(
  "/register",
  [
    body("firstName")
      .notEmpty()
      .withMessage("First name is required")
      .isLength({ min: 3 })
      .withMessage("Firstname must be at least 3 characters long"),

    body("lastName")
      .optional({ checkFalsy: true })
      .isLength({ min: 3 })
      .withMessage("Lastname must be at least 3 characters long"),

    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please enter a valid email")
      .isLength({ min: 5 })
      .withMessage("Email must be at least 5 characters long"),

    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  doctorController.registerDoctor
);

doctorRouter.post("/login",[
  body("email")
  .notEmpty()
  .withMessage("Email is required")
  .isEmail()
  .withMessage("Please enter a valid email")
  .isLength({ min: 5 })
  .withMessage("Email must be at least 5 characters long"),

  body("password")
  .notEmpty()
  .withMessage("Password is required")
  .isLength({ min: 5 })
  .withMessage("Password must be at least 5 characters long"),
],doctorController.loginUser);

doctorRouter.post(
  "/add-patient",
  authMiddleware,
  upload.single("analysis_report"), // 👈 handles PDF file + text fields
  [
    // Demographics validation
    body("first_name").notEmpty().withMessage("First name is required"),
    body("last_name").notEmpty().withMessage("Last name is required"),
    body("gender")
      .notEmpty()
      .isIn(["Male", "Female", "Other"])
      .withMessage("Invalid gender selection"),
    body("date_of_birth")
      .notEmpty()
      .isDate()
      .withMessage("Valid date of birth is required"),
    body("contact_number")
      .notEmpty()
      .isMobilePhone()
      .withMessage("Valid contact number is required"),
    body("email").notEmpty().isEmail().withMessage("Invalid email format"),

    // Anthropometrics
    body("height").optional().toFloat().isFloat({ min: 0 }),
    body("weight").optional().toFloat().isFloat({ min: 0 }),
    body("waist_circumference").optional().toFloat().isFloat({ min: 0 }),
    body("hip_circumference").optional().toFloat().isFloat({ min: 0 }),

    // Cardiorespiratory
    body("blood_pressure_systolic").optional().toFloat().isFloat({ min: 0 }),
    body("blood_pressure_diastolic").optional().toFloat().isFloat({ min: 0 }),
    body("resting_heart_rate").optional().toFloat().isFloat({ min: 0 }),
    body("oxygen_saturation")
      .optional()
      .toFloat()
      .isFloat({ min: 0, max: 100 }),
    body("respiratory_rate").optional().toFloat().isFloat({ min: 0 }),

    // Nutrition
    body("dietary_preference")
      .optional()
      .isIn(["Vegetarian", "Non-Vegetarian", "Vegan", "Pescatarian"]),
    body("daily_meal_count").optional().toInt().isInt({ min: 0 }),
    body("water_intake_liters").optional().toFloat().isFloat({ min: 0 }),

    // Blood Tests
    body("blood_group")
      .optional()
      .isIn(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
    body("fasting_blood_sugar").optional().toFloat().isFloat({ min: 0 }),
    body("hba1c").optional().toFloat().isFloat({ min: 0 }),
    body("cholesterol_total").optional().toFloat().isFloat({ min: 0 }),
    body("hdl").optional().toFloat().isFloat({ min: 0 }),
    body("ldl").optional().toFloat().isFloat({ min: 0 }),
    body("triglycerides").optional().toFloat().isFloat({ min: 0 }),

    // Mental Health
    body("stress_level").optional().toInt().isInt({ min: 1, max: 10 }),
    body("sleep_quality_hours")
      .optional()
      .toFloat()
      .isFloat({ min: 0, max: 24 }),
    body("mood")
      .optional()
      .isIn(["Happy", "Neutral", "Sad", "Anxious", "Excited", "Frustrated"]),
    body("anxiety_level").optional().toInt().isInt({ min: 1, max: 10 }),
    body("focus_level").optional().toInt().isInt({ min: 1, max: 10 }),
    body("energy_level").optional().toInt().isInt({ min: 1, max: 10 }),

    // Exercise
    body("exercise_frequency").optional().toInt().isInt({ min: 0, max: 7 }),
    body("exercise_type")
      .optional()
      .isIn([
        "Cardio",
        "Strength Training",
        "Yoga",
        "Pilates",
        "Swimming",
        "Running",
        "Cycling",
      ]),
    body("exercise_duration_minutes")
      .optional()
      .toInt()
      .isInt({ min: 0 }),
    body("intensity_level")
      .optional()
      .isIn(["Low", "Medium", "High"]),

    // Lifestyle & Nutrition Details
    body("calorie_intake_estimate").optional().toInt().isInt({ min: 0 }),
    body("protein_intake").optional().toInt().isInt({ min: 0 }),
    body("fibre_intake").optional().toInt().isInt({ min: 0 }),
    body("average_daily_steps").optional().toInt().isInt({ min: 0 }),
    body("weekly_active_hours").optional().toInt().isInt({ min: 0 }),
    body("vo2_max").optional().toFloat().isFloat({ min: 0 }),
    body("bmi").optional().toFloat().isFloat({ min: 0 }),
    body("waist_to_hip_ratio").optional().toFloat().isFloat({ min: 0 }),
  ],
  doctorController.addPatient
);

doctorRouter.get('/patients-list/:doctorId', authMiddleware, doctorController.getPatientsList);

module.exports = doctorRouter;

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Counter Schema for auto-increment
const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 100000 }, // start doctorId from 100000
});

const Counter = mongoose.model("Counter", counterSchema);

const doctorSchema = new mongoose.Schema({
  doctorId: {
    type: Number,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    minlength: [3, "Firstname must be atleast 3 characters long"],
  },
  lastName: {
    type: String,
    minlength: [3, "Lastname must be atleast 3 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "Password must be atleast 5 characters long"],
    select: false,
  },
});

// Auto-increment doctorId before saving
doctorSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "doctorId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.doctorId = counter.seq;
  }
  next();
});

// Generate JWT token
doctorSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, doctorId: this.doctorId },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

// Compare password
doctorSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Hash password before saving
doctorSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const doctorModel = mongoose.model("Doctors", doctorSchema);

module.exports = doctorModel;

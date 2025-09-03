const jwt = require("jsonwebtoken");
const doctorModel = require("../models/Doctor.model");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization token missing or invalid",
      });
    }

    const token = authHeader.split(" ")[1]; // Get token after 'Bearer '

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach doctor to request (optional, for created_by)
    const doctor = await doctorModel.findById(decoded._id).select("-password");
    if (!doctor) {
      return res.status(401).json({
        success: false,
        message: "Doctor not found",
      });
    }

    req.doctor = doctor; // attach logged-in doctor to request
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;

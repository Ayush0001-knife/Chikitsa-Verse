const doctorModel = require("../models/Doctor.model");

module.exports.createDoctor = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  if (!firstName  || !email || !password) {
    throw new Error("All fields are required");
  }

  // Get last doctorId (sorted descending)
  const lastDoctor = await doctorModel.findOne().sort({ doctorId: -1 });
  const doctorId = lastDoctor ? lastDoctor.doctorId + 1 : 1;

  const doctor = await doctorModel.create({
    doctorId,
    firstName,
    lastName,
    email,
    password,
  });

  return doctor;
};

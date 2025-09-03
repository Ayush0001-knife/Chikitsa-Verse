const express = require("express");
const cors = require("cors");
const doctorRouter = require("./routes/Doctor.routes");

const app = express();

app.use(express.json());

// ✅ Apply CORS before routes
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello Guyss This is ChikitsaVerse Backend");
});

app.use("/doctor", doctorRouter);

module.exports = app;

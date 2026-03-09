const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db1");

dotenv.config();

connectDB();

const app = express();

// CORS configuration
// Accept FRONTEND_URL (preferred) or CLIENT_URL (used in BACKEND/.env) as fallback
const frontendUrl = process.env.FRONTEND_URL || process.env.CLIENT_URL;
const defaultLocal = "http://localhost:5173";
const allowedOrigins = [frontendUrl, defaultLocal].filter(Boolean);

// Emergency toggle: if ALLOW_ALL_CORS=true, enable permissive CORS (use only for testing)
if (process.env.ALLOW_ALL_CORS === "true") {
  app.use(
    cors({
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      origin: function (origin, callback) {
        // allow requests with no origin like mobile apps or curl
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    })
  );
}

// middleware
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));

app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
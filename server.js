const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

const allowedOrigins = [
  "https://friendsgiving-menu.fr.to", // deployed frontend
  "https://api.friendsgiving-menu.fr.to", // backend, in case it needs to be accessed from itself
  "http://127.0.0.1:5501", // local development server
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Import consolidated routes
const routes = require("./routes");

// Use routes
app.use("/api", routes);

// Set up a basic test route
app.get("/", (req, res) => {
  res.send("Welcome to the Friendsgiving Menu Planner API!");
});

// Server listen
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

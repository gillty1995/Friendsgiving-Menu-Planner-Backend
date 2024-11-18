const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
  origin: "http://127.0.0.1:5501", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
};

app.use(cors(corsOptions));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

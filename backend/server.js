require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb+srv://jainsejal6102:12345@cluster0.yx7zgu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB Atlas"));
db.on("error", (err) => console.error("MongoDB Connection Error:", err));

// Schema & Model
const formSchema = new mongoose.Schema({
  phone: String,
  state: String,
  language: String,
  interestedProduct: String,
});

const FormModel = mongoose.model("FormData", formSchema);

// API Endpoint to Handle Form Submission
app.post("/submit-form", async (req, res) => {
  try {
    const newForm = new FormModel(req.body);
    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error submitting form" });
  }
});


app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Vercel!" });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

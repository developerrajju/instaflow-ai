require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Use ENV instead of local Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Routes
app.get("/", (req, res) => res.send("API Running"));

// Port from ENV (important for deployment)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/campaign", require("./routes/campaignRoutes"));
console.log("Auth routes loaded");

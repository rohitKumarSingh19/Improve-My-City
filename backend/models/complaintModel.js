const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  location: String,
  status: { type: String, default: "Pending" }, // Pending, In Progress, Resolved
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Complaint", complaintSchema);

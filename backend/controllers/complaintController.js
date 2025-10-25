const Complaint = require("../models/complaintModel");

exports.createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      image: req.file ? req.file.path : null,
      user: req.user.id,
    });
    res.json(complaint);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getComplaints = async (req, res) => {
  const complaints = await Complaint.find().populate("user", "name email");
  res.json(complaints);
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updated = await Complaint.findByIdAndUpdate(id, { status }, { new: true });
  res.json(updated);
};

exports.getResolvedComplaints = async (req, res) => {
  const resolved = await Complaint.find({ status: "Resolved" });
  res.json(resolved);
};

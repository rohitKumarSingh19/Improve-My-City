const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  createComplaint,
  getComplaints,
  updateStatus,
  getResolvedComplaints,
} = require("../controllers/complaintController");

router.post("/", protect, upload.single("image"), createComplaint);
router.get("/", protect, getComplaints);
router.patch("/:id/status", protect, updateStatus);
router.get("/public/resolved", getResolvedComplaints);

module.exports = router;

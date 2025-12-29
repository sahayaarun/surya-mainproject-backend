const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

// EMPLOYER
router.post("/", jobController.createJob);

// ADMIN
router.get("/admin/pending-jobs", jobController.getPendingJobs);
router.put("/admin/approve/:id", jobController.approveJob);

// JOB SEEKER
router.get("/approved", jobController.getApprovedJobs);

module.exports = router;
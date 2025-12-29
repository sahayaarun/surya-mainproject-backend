const Job = require("../models/job");

// EMPLOYER - CREATE JOB
exports.createJob = async (req, res) => {
  try {
    const newJob = new Job({
      ...req.body,
      status: "pending"
    });

    await newJob.save();
    res.status(201).json({ message: "Job saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADMIN - GET PENDING JOBS
exports.getPendingJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ status: "pending" });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADMIN - APPROVE JOB
exports.approveJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// JOB SEEKER - GET APPROVED JOBS
exports.getApprovedJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ status: "approved" });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const router = require("express").Router();
const Jobs = require("../models/Job");
const User = require("../models/User");

//create a job

router.post("/", async (req, res) => {
  const newJob = new Jobs(req.body);
  try {
    const savedPost = await newJob.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //update a job

router.put("/:id", async (req, res) => {
  try {
    const job = await Jobs.findById(req.params.id);
    if (job.userId === req.body.userId) {
      await job.updateOne({ $set: req.body });
      res.status(200).json("the job has been updated");
    } else {
      res.status(403).json("you can update only your own job");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// //delete a job

router.delete("/:id", async (req, res) => {
  try {
    const job = await Jobs.findById(req.params.id);
    if (job.userId === req.body.userId) {
      await job.deleteOne();
      res.status(200).json("the job has been deleted");
    } else {
      res.status(403).json("you can delete only your job");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// //get a job

router.get("/:id", async (req, res) => {
  try {
    const job = await Jobs.findById(req.params.id);
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all jobs

router.get("/alljobs/get", async (req, res) => {
  try {
    const allJobs = await Jobs.find({});
    res.status(200).json(allJobs)
  } catch (err) {
    res.status(500).json(err);
  }
});

// //get user's jobs

router.get("/userjobs/:id", async (req, res) => {
  try {    
    const jobs = await Jobs.find({userId: req.params.id});
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
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

//update a job

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

//update apply for job

router.put("/apply/:id", async (req, res) => {
  try {
    const job = await Jobs.findById(req.params.id);
    if (!job.applicants.includes(req.body.userId)) {
      await job.updateOne({ $push: { applicants: req.body.userId } });
      res.status(200).json("you applied for the job");
    } else {
      await job.updateOne({ $pull: { applicants: req.body.userId } });
      res.status(200).json("your application for the job was cancelled");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a job

router.delete("/:id", async (req, res) => {
  try {
    const job = await Jobs.findById(req.params.id);
    if (job.userId === req.body.userId) {
      await job.deleteOne();
      res.status(200).json("the job has been deleted");
    } else {
      res.status(403).json("you can only delete your own job");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a job

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

//get user's posted jobs

router.get("/userjobs/:id", async (req, res) => {
  try {    
    const jobs = await Jobs.find({userId: req.params.id});
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user's applied jobs

router.get("/appliedjobs/:id", async (req, res) => {
  try {    
    const { applications } = await User.find({user_id: req.params.id});

    // const appliedJobs = await Promise.all(
    //   applications.map((jobId) => {
    //     return Jobs.find({ _id: jobId });
    //   })
    // );
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
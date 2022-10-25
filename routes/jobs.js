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
    const user = await User.findById(req.body.userId)
    if (!job.applicants.includes(req.body.userId)) {
      await job.updateOne({ $push: { applicants: req.body.userId } });
      await user.updateOne({ $push: { applications: req.params.id } });
      res.status(200).json("you applied for the job");
    } else {
      await job.updateOne({ $pull: { applicants: req.body.userId } });
      await user.updateOne({ $pull: { applications: req.params.id } });
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

//get a query

router.get("/all/search/", async (req, res) => {
  const query = {}
  const qTitle = req.query.title
  const qCompany = req.query.company
  const qDate = req.query.date
  const qWorkPlace = req.query.workPlace
  const qLocation = req.query.location
  const qType = req.query.type
  
  if(qTitle) { 
    const regexTitle = new RegExp(qTitle, 'gi')
    query.title = {$regex: regexTitle} 
  }

  if(qCompany) {
    const regexCompany = new RegExp(qCompany, 'gi')
    query.company = {$regex: regexCompany}
  }

  if(qDate) {
    if(qDate === "Past Month"){
      query.createdAt = {
        $gte: new Date((new Date().getTime() - (31 * 24 * 60 * 60 * 1000))) 
      }
    } 
    if(qDate === "Past Week"){
      query.createdAt = {
        $gte: new Date((new Date().getTime() - (7 * 24 * 60 * 60 * 1000))) 
      }
    } 
    if(qDate === "Past 24 hours"){
      query.createdAt = {
        $gte: new Date((new Date().getTime() - (1 * 24 * 60 * 60 * 1000))) 
      }
    }
  }

  if(qWorkPlace) { query.workPlace = qWorkPlace }
  if(qLocation) { query.location = qLocation }
  if(qType) { query.type = qType }
  
  try {
    const result = await Jobs.find(query)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
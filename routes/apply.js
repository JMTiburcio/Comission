const Apply = require("../models/Apply");
const User = require("../models/User");
const Jobs = require("../models/Job");
const router = require("express").Router();


//create appliment
router.post("/", async (req, res) => {
  const newApply = new Apply(req.body);
  const job = await Jobs.findById(req.body.jobId);
  const user = await User.findById(req.body.userId)
  try {
    const savedApply = await newApply.save();
    await job.updateOne({ $push: { applicants: req.body.userId } });
    await user.updateOne({ $push: { applications: req.body.jobId } });
    res.status(200).json(savedApply);
  } catch (err) {
    res.status(500).json(err);
  }
});

//query appliments
router.get("/search/", async (req, res) => {
  const query = {};
  const qUserId = req.query.userId;
  const qJobId = req.query.jobId;

  if(qUserId) { query.userId = req.query.userId };
  if(qJobId) { query.userId = req.query.jobId };

  try {
    const appliments = await Apply.find(query);
    res.status(200).json(appliments);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
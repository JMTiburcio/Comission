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

// //get timeline posts

// router.get("/timeline/:userId", async (req, res) => {
//   try {
//     const currentUser = await User.findById(req.params.userId);
//     const userPosts = await Post.find({ userId: currentUser._id });
//     const friendPosts = await Promise.all(
//       currentUser.followings.map((friendId) => {
//         return Post.find({ userId: friendId });
//       })
//     );
//     res.status(200).json(userPosts.concat(...friendPosts))
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //get user's posts

// router.get("/profile/:username", async (req, res) => {
//   try {
//     const user = await User.findOne({username:req.params.username});
//     const posts = await Post.find({userId: user._id});
//     res.status(200).json(posts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
const User = require("../models/User");
const Company = require("../models/Company");
const router = require("express").Router();

//update user
// router.put("/:id", async (req, res) => {
//   if (req.body.userId === req.params.id || req.body.isAdmin) {
//     if (req.body.password) {
//       try {
//         const salt = await bcrypt.genSalt(10);
//         req.body.password = await bcrypt.hash(req.body.password, salt);
//       } catch (err) {
//         return res.status(500).json(err);
//       }
//     }
//     try {
//       const user = await User.findByIdAndUpdate(req.params.id, {
//         $set: req.body,
//       });
//       res.status(200).json("Account has been updated");
//     } catch (err) {
//       return res.status(500).json(err);
//     }
//   } else {
//     return res.status(403).json("You can update only your account!");
//   }
// });

//create company
router.post("/", async (req, res) => {
  const newCompany = new Company(req.body);
  const user = await User.findById(req.body.admin);
  try {
    if(user){
      const savedCompany = await newCompany.save();
      res.status(200).json(savedCompany);
    } else {
      res.status(400).json("admin not found!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


//delete company
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await Company.findByIdAndDelete(req.params.id);
      res.status(200).json("Company has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
});

//get a company
router.get("/", async (req, res) => {
  const companyId = req.query.companyId;
  const name = req.query.name;

  try {
    const company = companyId 
      ? await Company.findById(companyId) 
      : await Company.findOne({name:name});
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json(err);
  }
});

//follow a user

// router.put("/:id/follow", async (req, res) => {
//   if (req.body.userId !== req.params.id) {
//     try {
//       const user = await User.findById(req.params.id);
//       const currentUser = await User.findById(req.body.userId);
//       if (!user.followers.includes(req.body.userId)) {
//         await user.updateOne({ $push: { followers: req.body.userId } });
//         await currentUser.updateOne({ $push: { followings: req.params.id } });
//         res.status(200).json("user has been followed");
//       } else {
//         res.status(403).json("you already follow this user");
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("you cant follow yourself");
//   }
// });

//unfollow a user

// router.put("/:id/unfollow", async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//       try {
//         const user = await User.findById(req.params.id);
//         const currentUser = await User.findById(req.body.userId);
//         if (user.followers.includes(req.body.userId)) {
//           await user.updateOne({ $pull: { followers: req.body.userId } });
//           await currentUser.updateOne({ $pull: { followings: req.params.id } });
//           res.status(200).json("user has been unfollowed");
//         } else {
//           res.status(403).json("you dont follow this user");
//         }
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(403).json("you cant unfollow yourself");
//     }
//   });


  
//get posted jobs

// router.get("/postedjobs/", async (req, res) => {
//   const query = {}
//   const qUserId = req.query.userId
//   const qStatus = req.query.status

//   if(qUserId) { query.userId = qUserId }
//   if(qStatus) { query.status = qStatus }

//   try {
//     const jobs = await Job.find(query);
//     res.status(200).json(jobs);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//get applied jobs

// router.get("/appliedjobs/:id", async (req, res) => {
//   try {    
//     const user = await User.findById(req.params.id);
//     const appliedJobs = await Promise.all(
//       user.applications.map((jobId) => {
//         return Job.findById(jobId);
//       })
//     );
//     res.status(200).json(appliedJobs);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
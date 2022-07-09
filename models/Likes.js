const mongoose = require("mongoose");

const LikesSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      max: 500,
    },
    profileId: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Likes", LikesSchema);
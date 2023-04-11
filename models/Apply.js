const mongoose = require("mongoose");

const ApplySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    jobId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    questions: {
      type: Array,
    },
    status: {
      type: String,
      required: true,
      default: "on going",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Apply", ApplySchema);
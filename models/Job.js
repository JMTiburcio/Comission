const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
        userId: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        workPlace: {
          type: String,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        skills: {
          type: Array,
        },
        applicants: {
          type: Array,
        },
        hearAbout: {
          type: String,
        },
        applicantCollection: {
          type: String,
        },
        screeningQuestions: {
          type: String,
        },
        desc: {
          type: String,
          max: 500,
        },
        img: {
          type: String,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Job", JobSchema);
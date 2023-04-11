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
        applicantContact: {
          type: Object,
          required: true,
        },
        screeningQuestions: {
          type: Array,
        },
        desc: {
          type: String,
          max: 500,
        },
        qualification: {
          type: Boolean,
        },
        img: {
          type: String,
        },
        status: {
          type: String,
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Job", JobSchema);
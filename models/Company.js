const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true
        },
        email:{
            type: String,
            require: true,
            max: 50,
            unique: true
        },
        webiste:{
            type: String,
            require: true,
            max: 50,
            unique: true
        },
        profilePicture:{
            type: String,
            default: ""
        },
        coverPicture:{
            type: String,
            default: ""
        },
        followers:{
            type: Array,
            default: []
        },
        followings:{
            type: Array,
            default: []
        },
        admin:{
            type: String,
            required: true,
        },
        about:{
            type: String,
            max: 50
        },
        location:{
            type: String,
            max: 50
        },
        category:{
            type: String,
            max: 50
        },
        employees:{
            type: Array,
        },
        size:{
            type: String,
        },
        founded:{
            type: Number,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Company", CompanySchema);
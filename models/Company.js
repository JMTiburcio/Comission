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
        password:{
            type: String,
            require: true,
            min: 6
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
        isAdmin:{
            type: Boolean,
            default: false
        },
        desc:{
            type: String,
            max: 50
        },
        city:{
            type: String,
            max: 50
        },
        size:{
            type: Number,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Company", CompanySchema);
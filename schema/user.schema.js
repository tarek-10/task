const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    country_code: {
      type: String,
      required: true,
    },
    phone_number: {
      type: Number,
      required: true,
    },
    gender: {
      type:String,
      enum: ["male", "female"],
    },
    birthdate: {
      type: String,
      required: true,
    },
    avatar: {
      type: Array,
    },
    email: {
      type: String,
      required: true,
    },
    password:{
      type:String,
      required:true
    },
    role:{
      type:String,
      enum:["user","admin"]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
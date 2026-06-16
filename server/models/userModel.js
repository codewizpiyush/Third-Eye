const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    enrollmentNo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    yearLevel: {
      type: String,
      required: true,
    },
    degreeProgram: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      enum: ["admin", "teacher", "user"],
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

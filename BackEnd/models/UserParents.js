const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserParentsSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required : [true, "please provide a fname"]
    },
    lastname : {
      type: String,
      required : [true, "please provide a lname"]
    },
    username: {
      type: String,
      require: [true, "please provide a username"],
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "please provide an email"],
      max: 50,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: true,
      min: 6,
      select: false
    },
    studentid: {
      type: String,
      required: [true, "please provide a student"],
      
    },
    teacherid: {
      type: String,
      required:  [true, "please provide a teacher"],
      
      },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

    profilePicture: {
      type: String,
      default: "",
    },
    isparent: {
      type: Boolean,
      default: true,
    },
    city: {
      type: String,
      max: 50,
    },
    School: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);
UserParentsSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
UserParentsSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserParentsSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
UserParentsSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};
const UserParents= mongoose.models.UserParents || mongoose.model("UserParents", UserParentsSchema);
module.exports = UserParents;

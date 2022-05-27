const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserTeachersSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required : [true, "please provide a name"]
    },
    firstname: {
      type: String,
      required : [true, "please provide a name"]
    },
    lastname : {
      type: String,
      required : [true, "please provide a name"]
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
    resetPasswordToken: String,
    resetPasswordExpire: Date,

    profilePicture: {
      type: String,
      default: "",
    },
    isSystemAdmin: {
      type: Boolean,
      default: false,
    },
    isSchoolAdmin: {
      type: Boolean,
      default: false,
    },
    isteacher: {
      type: Boolean,
      default: false,
    },
    isparent: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
UserSchema.methods.getResetPasswordToken = function () {
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
const UserTeachers= mongoose.models.UserTeachers || mongoose.model("UserTeachers", UserTeachersSchema);
module.exports = UserTeachers;

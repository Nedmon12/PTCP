<<<<<<< HEAD
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
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
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
=======
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    firstname: {
        type: String,
        required : true
    },
    lastname : {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('user', userSchema)
>>>>>>> a2130a3c3a430ae504e361e4582fa5fc0d213e4e

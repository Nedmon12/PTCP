const express = require("express");
const router = express.Router();

const {register,inviteparentsend ,inviteuser, pregister ,login, plogin, forgetpassword, resetPassword}= require('../controllers/userController');


router.route("/register").post(register);

router.route("/pregister").post(pregister);

router.route("/login").post(login);

router.route("/plogin").post(plogin);

router.route("/forgetpassword").post(forgetpassword);

router.route("/inviteuser").post(inviteuser);

//router.route("/invitesenduser").post(inviteparentsend);

router.route("/resetpassword/:resetToken").put(resetPassword);

module.exports = router;


















/*const router = require("express").Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");
router.get("/", (req,res)=>{
  res.send("welcome to auth")
})
  //REGISTER
router.post("/register", async (req, res) => {
  console.log("trying to register")
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
    console.log("trying to login")
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;*/
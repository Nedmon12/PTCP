const User = require("../models/users");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", (req,res)=>{
  res.send("welcome to users")
})

module.exports = router
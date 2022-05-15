const User = require("../models/Users");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", (req,res)=>{
  res.send("welcome to users")
})

module.exports = router
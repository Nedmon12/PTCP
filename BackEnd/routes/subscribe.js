const express = require("express");
const router = express.Router();

const {addSchool}=require("../controllers/subscribe")
//addbehaviour,fetchBehaviour,
router.route("/addschool").post(addSchool);

module.exports = router;
const express = require("express");
const router = express.Router();

const {addSkill, fetchSkill, fetchNegativeSkill}=require("../controllers/skillManagment")


router.route("/addskill").post(addSkill);
router.route("/fetchallskill/:TeacherId").get(fetchSkill);
router.route("/fetchnegativeskill/:TeacherId").get(fetchNegativeSkill);

//router.route("/fetchstudent/:teacherid").get(fetchSkill);

module.exports = router;
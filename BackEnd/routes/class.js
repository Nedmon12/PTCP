const express = require("express");
const router = express.Router();

const {addSkill, fetchSkill, fetchNegativeSkill, addSubject, fetchSubject, addResult, fetchresult}=require("../controllers/ClassManagment")


router.route("/addskill").post(addSkill);
router.route("/fetchallskill/:TeacherId").get(fetchSkill);
router.route("/fetchnegativeskill/:TeacherId").get(fetchNegativeSkill);

router.route("/addresult").post(addResult);
router.route("/fetchresult/:teacherid/:studentid/:subjectid").get(fetchresult);



router.route("/addsubject").post(addSubject);
router.route("/fetchallsubject/:TeacherId").get(fetchSubject);
//router.route("/fetchstudent/:teacherid").get(fetchSkill);

module.exports = router;
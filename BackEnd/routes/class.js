const express = require("express");
const router = express.Router();

const {addSkill, fetchSkill, fetchNegativeSkill, addSubject, fetchSubject, addResult, fetchresult,deleteSubject}=require("../controllers/ClassManagment")


router.route("/addskill").post(addSkill);
router.route("/fetchallskill/:TeacherId").get(fetchSkill);
router.route("/fetchnegativeskill/:TeacherId").get(fetchNegativeSkill);




router.route("/addsubject").post(addSubject);
router.route("/fetchallsubject/:TeacherId").get(fetchSubject);
router.route("/deleteSubject/subjectId").get(deleteSubject)
//router.route("/fetchstudent/:teacherid").get(fetchSkill);

module.exports = router;
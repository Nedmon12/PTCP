const express = require("express");
const router = express.Router();

const {addStudent,fetchStudents,fetchmykid, fetchmykidteacher,fetchmystudentparent,attendance,behaviourupdate}=require("../controllers/studentManagmentController")
//addbehaviour,fetchBehaviour,
router.route("/addstudent").post(addStudent);
router.route("/addbehaviour/:studentid").put(behaviourupdate);
//router.route("/addbehaviour").post(addbehaviour);
router.route("/fetchstudent/:teacherid").get(fetchStudents);
//router.route("/fetchbeheviour/:teacherid").get(fetchBehaviour);

router.route("/Attendance").post(attendance);

router.route("/fetchmykid/:_id").get(fetchmykid);

router.route("/fetchmykidteacher/:_id").get(fetchmykidteacher);

router.route("/fetchmystudentparent/:studentid").get(fetchmystudentparent);

module.exports = router;
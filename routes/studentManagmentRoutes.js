const express = require("express");
const router = express.Router();

const {addStudent,editStudent,fetchStudents,addResult,fetchattendance,behaviourfetch,addAverage,addTotalResult,fetchmykid,fetchresult,fetchresultt ,fetchmykidteacher,fetchmystudentparent,attendance,behaviourupdate,behaviourallfetch}=require("../controllers/studentManagmentController")
//addbehaviour,fetchBehaviour,
router.route("/addstudent").post(addStudent);

//router.route("/editstudent").post(editStudent);


router.route("/addbehaviour/:studentid").put(behaviourupdate);
router.route("/behaviourfetch/:studentid").get(behaviourfetch);
router.route("/behaviourallfetch/:teacherid").get(behaviourallfetch);
//router.route("/addbehaviour").post(addbehaviour);
router.route("/fetchstudent/:teacherid").get(fetchStudents);
//router.route("/fetchbeheviour/:teacherid").get(fetchBehaviour);
router.route("/addresult").post(addResult);
router.route("/addtotalresult/:teacherid/:studentid/:subjectid").put(addTotalResult);

router.route("/addAverage").post(addAverage);


router.route("/fetchresultt/:teacherid/:studentid").get(fetchresultt);

router.route("/fetchresult/:teacherid/:studentid/:subjectid").get(fetchresult);

router.route("/fetchattendance/:studentid/:attendancedate").get(fetchattendance);

router.route("/Attendance").post(attendance);

router.route("/fetchmykid/:_id").get(fetchmykid);

router.route("/fetchmykidteacher/:_id").get(fetchmykidteacher);

router.route("/fetchmystudentparent/:studentid").get(fetchmystudentparent);

module.exports = router;
const express = require("express");
const router = express.Router();

const {addStudent,fetchStudents, attendance,behaviourupdate}=require("../controllers/studentManagmentController")
//addbehaviour,fetchBehaviour,
router.route("/addstudent").post(addStudent);
router.route("/addbehaviour/:studentid").put(behaviourupdate);
//router.route("/addbehaviour").post(addbehaviour);
router.route("/fetchstudent/:teacherid").get(fetchStudents);
//router.route("/fetchbeheviour/:teacherid").get(fetchBehaviour);

router.route("/Attendance").post(attendance);

module.exports = router;
const express = require("express");
const router = express.Router();

const {addStudent,fetchStudents, attendance}=require("../controllers/studentManagmentController")

router.route("/addstudent").post(addStudent);
router.route("/fetchstudent/:teacherid").get(fetchStudents);
router.route("/Attendance").post(attendance);

module.exports = router;
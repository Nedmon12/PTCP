const express = require("express");
const router = express.Router();

const {addStudent,fetchStudents}=require("../controllers/studentManagmentController")

router.route("/addstudent").post(addStudent);
router.route("/fetchstudent/:teacherid").get(fetchStudents);


module.exports = router;
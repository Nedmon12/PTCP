const Student= require('../models/Student')
const User= require('../models/Users')
const Attendance= require('../models/Attendance')
exports.addStudent= async(req,res,next) => {
    const { firstname, lastname, teacherid, studentclass } = req.body;
try{
    const student= await Student.create({
        firstname,
        lastname,
        teacherid,
        studentclass
    });
    res.status(201).json({
        success: true,
        student
    });
    }catch(error){
        next(error);
    }
};

exports.fetchStudents=async(req,res,next)=>{
        try {
          const student = await Student.find({teacherid: req.params.teacherid});
          console.log(student)
          res.status(200).json(student);
        } catch (error) {
          next(error);
        }
      };
      
      exports.attendance= async(req,res,next) => {
        const { studentid, attendance, teacherid } = req.body;
    try{
        const attendnace= await Attendance.create({
            studentid,
            attendance,
            teacherid,
        });
        res.status(201).json({
            success: true,
            attendance
        });
        }catch(error){
            next(error);
        }
    };
    
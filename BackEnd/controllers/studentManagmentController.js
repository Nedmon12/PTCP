const Student= require('../models/Student')
const User= require('../models/UserTeachers')
const Attendance= require('../models/Attendance')
//const Behaviour= require('../models/behaviour')
exports.addStudent= async(req,res,next) => {
    const { firstname, lastname, pokemanUrl,teacherid, studentclass } = req.body;
try{
    const student= await Student.create({
        firstname,
        lastname,
        pokemanUrl,
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
    exports.behaviourupdate=async(req,res,next)=>{
         try {
            const student = await Student.findById({studentid: req.params.studentid});
            console.log(student)
            await student.updateOne({ $push: { behaviourpoint: req.body.behaviourpoint } });
            res.status(200).json(student);
          } catch (err) {
          res.status(500).json(err);
        }
      
        };
      
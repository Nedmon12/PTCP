const Student= require('../models/Student')
const User= require('../models/UserTeachers')
const Attendance= require('../models/Attendance');
const Puser = require('../models/UserParents');
const Behaviour = require('../models/Behaviour');
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

    exports.fetchmykid=async(req,res,next)=>{
        try {
          const kid = await Student.findById({_id: req.params._id});
          console.log(kid)
          res.status(200).json(kid);
        } catch (error) {
          next(error);
        }
      };
      exports.fetchmykidteacher=async(req,res,next)=>{
        try {
          const teacher = await User.findById({_id: req.params._id}).select("firstname lastname username email profilepicture resposibleclass");
          console.log(teacher)
          res.status(200).json(teacher);
        } catch (error) {
          next(error);
        }
      };
      exports.fetchmystudentparent=async(req,res,next)=>{
        try {
          const parent = await Puser.findOne({studentid: req.params.studentid}).select("profilePicture firstname lastname username email profilepicture resposibleclass");
          console.log(parent)
          res.status(200).json(parent);
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
      const { studentid, behaviourpoint, teacherid } = req.body;
         console.log("trying to update")
      try {
            const behaviour = await Behaviour.findById({studentid: req.params.studentid});
            const updatedbehaviour = behaviour.behaviourpoint + behaviourpoint;
            console.log(behaviour.behaviourpoint)
            console.log(updatedbehaviour)
        
            if(behaviour.studentid===req.body.studentid){
              await behaviour.updateOne({ $push: { behaviourpoint: updatedbehaviour  } });
              res.status(200).json(behaviour);
            }    
          } catch (err) {
          res.status(500).json(err);
        }
      
        };
      
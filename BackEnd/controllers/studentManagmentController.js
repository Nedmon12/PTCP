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
          const teacher = await Puser.findById({_id: req.params._id}).select("firstname lastname username email profilepicture resposibleclass");
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
        console.log("trying to update 2")
            const filter = {studentid: req.params.studentid};
            const behaviour = await Behaviour.findOne({studentid: req.params.studentid});
            console.log(behaviour.behaviourpoint)
            const updatedbehaviour = parseInt(behaviour.behaviourpoint) + parseInt(behaviourpoint);
            const update = {behaviourpoint:updatedbehaviour};
            console.log(update)


            const  doc = await Behaviour.findOneAndUpdate(filter, update, {
              returnOriginal: false
            });

             console.log(doc);
              res.status(200).json(doc);
                
          } catch (err) {
          res.status(500).json(err);
        }
      
        };
      
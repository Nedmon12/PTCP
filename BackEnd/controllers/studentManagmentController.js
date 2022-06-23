const Student= require('../models/Student')
const User= require('../models/UserTeachers')
const Attendance= require('../models/Attendance');
const Puser = require('../models/UserParents');
const Behaviour = require('../models/Behaviour');
const Result= require('../models/result')
const TotalResult= require('../models/TotalResult')
const Average= require('../models/Average')
const BehaviourAnalysis= require('../models/BehaviourAnalysis')


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
//edit student

//delete student
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
          const teacher = await User.findById({_id: req.params._id});
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
        const { studentid, attendancedate, attendancevalue, teacherid } = req.body;
        const exist = await Attendance.findOne({studentid, attendancedate})
        if(!exist){
        try{
        const attendnace= await Attendance.create({
            studentid,
            attendancevalue,
            attendancedate,
            teacherid,
        });
        res.status(201).json({
            success: true,
            attendnace
        });
        }catch(error){
            next(error);
        }
      }else{
        try{
          
          const filter = {studentid, attendancedate};
          
          const update = {attendancevalue: attendancevalue};
          const  doc = await Attendance.findOneAndUpdate(filter, update, {
            returnOriginal: false
          });
            res.status(200).json(doc); 
        } catch (err) {
        res.status(500).json(err);
      }
        
      }
      };
    exports.fetchattendance= async(req,res,next) => {
  try{
      const attendance= await Attendance.findOne({studentid: req.params.studentid, attendancedate: req.params.attendancedate }) 
      res.status(201).json(attendance);
      }catch(error){
          next(error);
      }
  };
    exports.behaviourupdate=async(req,res,next)=>{
      const { studentid, behaviourpoint, teacherid } = req.body;
      const exist = await Behaviour.findOne({studentid: req.params.studentid})      
      if(exist){
        try{
          const behaviour = await Behaviour.findOne({studentid: req.params.studentid})      
         
          const filter = {studentid: req.params.studentid};
          console.log(req.params.studentid)
          
          const updatedbehaviour = parseInt(behaviour.behaviourpoint) + parseInt(behaviourpoint);
          
          const update = {behaviourpoint:updatedbehaviour};
          const  doc = await Behaviour.findOneAndUpdate(filter, update, {
            returnOriginal: false
          });
            res.status(200).json(doc); 
        } catch (err) {
        res.status(500).json(err);
      }
                }
            else{
              console.log("here")
              try{
                const behaviour= await Behaviour.create({
                    studentid,
                    behaviourpoint,
                    teacherid,
                });
                res.status(201).json({
                    success: true,
                    behaviour
                });
                }catch(error){
                    next(error);
      }
        }};
        exports.addbehaviour=async(req,res,next)=>{
          const { studentid, behaviourpoint, teacherid, reason } = req.body;
          try{
            const behaviour= await BehaviourAnalysis.create({
                studentid,
                behaviourpoint,
                teacherid,
                reason
            });
            res.status(201).json({
                success: true,
                behaviour
            });
            }catch(error){
                next(error);
  }   
        }
        exports.behaviourallfetch=async(req,res,next)=>{
          try{  
            const exist = await BehaviourAnalysis.findOne({studentid: req.params.studentid , reason: req.params.reason })      
            console.log(exist)
            res.status(200).json(exist);
          } catch (error) {
            next(error);
          }
          };
        exports.behaviourfetch=async(req,res,next)=>{
        try{  
          const exist = await Behaviour.findOne({studentid: req.params.studentid})      
          console.log(exist)
          res.status(200).json(exist);
        } catch (error) {
          next(error);
        }
        };
         
        exports.behaviourallfetch=async(req,res,next)=>{
          try{  
            const exist = await Behaviour.find({teacherid: req.params.teacherid})      
            console.log(exist)
            res.status(200).json(exist);
          } catch (error) {
            next(error);
          }
          };
           
          exports.addResult= async(req,res,next) => {
            const {studentid, teacherid, subjectid,subjectname, outof, mainresult, reason} = req.body;
        try{
            const result= await Result.create({
              teacherid, 
              studentid,
              subjectid,
              subjectname,
              outof,
              mainresult,
              reason
            });
            res.status(200).json({result});
            }catch(error){
                next(error);
            }
        };
        exports.addTotalResult= async(req,res,next) => {
          const {studentid, teacherid, subjectid,subjectname,  totalresult, reason} = req.body;

          const exist = await TotalResult.findOne({studentid: req.params.studentid , subjectid: req.params.subjectid})      
      if(exist){
        try{
          const totalResult = await Behaviour.findOne({studentid: req.params.studentid ,subjectid: req.params.subjectid  })      
         
          const filter = {studentid: req.params.studentid, subjectid: req.params.subjectid};
          
          const update = {totalresult: totalresult};
          const  doc = await TotalResult.findOneAndUpdate(filter, update, {
            returnOriginal: false
          });
            res.status(200).json(doc); 
        } catch (err) {
        res.status(500).json(err);
      }
                }
            else{
              console.log("here")
              try{
                const totalResult= await TotalResult.create({
                  teacherid,  
                  studentid,
                  subjectid,
                  subjectname,
                  teacherid,
                  totalresult,
                  reason,
                });
                res.status(201).json({
                    success: true,
                    totalResult
                });
                }catch(error){
                    next(error);
      }
        }};
      
        exports.fetchresult=async(req,res,next)=>{
         // const {studentid, teacherid, subjectid} = req.body;
          try {
            const result = await Result.find({teacherid:req.params.teacherid , studentid:req.params.studentid , subjectid:req.params.subjectid});
            console.log(result)
            res.status(200).json(result);
          } catch (error) {
            next(error);
          }
        };
        exports.fetchresultt=async(req,res,next)=>{
          // const {studentid, teacherid, subjectid} = req.body;
           try {
             const result = await Result.find({teacherid:req.params.teacherid , studentid:req.params.studentid});
             console.log(result)
             res.status(200).json(result);
           } catch (error) {
             next(error);
           }
         };
         exports.addAverage= async(req,res,next) => {
          const { teacherid,studentid ,Averagepoint,reason} = req.body;
          const exist = await Average.findOne({studentid, teacherid})      
        if(exist){
          try{
            const average = await Average.findOne({teacherid, studentid})      
           
            const filter = {studentid, teacherid};
           // const updatedAveragepoint = parseInt(average.Averagepoint) + parseInt(Averagepoint);
        
            const update = {Averagepoint:Averagepoint};
            const  doc = await Average.findOneAndUpdate(filter, update, {
              returnOriginal: false
            });
              res.status(200).json(doc); 
          } catch (err) {
          res.status(500).json(err);
        }
                  }
      else{
      try{
          const average= await Average.create({
            teacherid, 
            studentid,
            Averagepoint,
            reason
          });
          res.status(200).json({
              success: true,
              average
          });
          }catch(error){
              next(error);
          }
        }
        };
const Skill= require('../models/Skill')
const Subject= require('../models/Subject')
const Result= require('../models/result')

exports.addSkill= async(req,res,next) => {
    const { TeacherId, SkillName, SkillPoint,SkillType, } = req.body;
try{
    const skill= await Skill.create({
        TeacherId, 
        SkillName, 
        SkillType,
        SkillPoint
    });
    res.status(200).json({
        success: true,
        skill
    });
    }catch(error){
        next(error);
    }
};
exports.fetchSkill=async(req,res,next)=>{
    try {
      const skill = await Skill.find({TeacherId: req.params.TeacherId , SkillType: true});
      console.log(skill)
      res.status(200).json(skill);
    } catch (error) {
      next(error);
    }
  };
  exports.fetchNegativeSkill=async(req,res,next)=>{
    try {
      const skill = await Skill.find({TeacherId: req.params.TeacherId , SkillType: false });
      console.log(skill)
      res.status(200).json(skill);
    } catch (error) {
      next(error);
    }
  };
  exports.addSubject= async(req,res,next) => {
    const { TeacherId, SubjectName} = req.body;
try{
    const subject= await Subject.create({
      TeacherId, 
      SubjectName,
    });
    res.status(200).json({
        success: true,
        subject
    });
    }catch(error){
        next(error);
    }
};
exports.fetchSubject=async(req,res,next)=>{
    try {
      const subject = await Subject.find({TeacherId: req.params.TeacherId});
      console.log(subject)
      res.status(200).json(subject);
    } catch (error) {
      next(error);
    }
  };
  exports.addResult= async(req,res,next) => {
    const {studentid, teacherid, subjectid, outof, mainresult, reason} = req.body;
try{
    const result= await Result.create({
      teacherid, 
      studentid,
      subjectid,
      outof,
      mainresult,
      reason
    });
    res.status(200).json({result});
    }catch(error){
        next(error);
    }
};
exports.fetchresult=async(req,res,next)=>{
 // const {studentid, teacherid, subjectid} = req.body;
  try {
    const result = await Result.find({teacherid: req.params.teacherid , studentid: req.params.studentid , subjectid: req.params.subjectid  });
    console.log(result)
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
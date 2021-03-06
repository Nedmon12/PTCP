const Skill= require('../models/Skill')
const Subject= require('../models/Subject')
const Result= require('../models/result');
const Student = require('../models/Student');

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
  exports.deleteSubject = async (req,res,next) => {
    try {
      // console.log(req.params.studentId)
      const deleted = await Subject.findById(req.params.subjectId)
      deleted.remove().then(()=> res.json({success: true}))
      // res.status(200).json(deleted)
    }
    catch(err) {
      res.status(500).json(err)
    }
  }
 
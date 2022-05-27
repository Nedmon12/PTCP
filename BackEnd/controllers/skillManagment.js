const Skill= require('../models/Skill')


exports.addSkill= async(req,res,next) => {
    const { TeacherId, SkillName, SkillImg, SkillPoint,SkillType, } = req.body;
try{
    const skill= await Skill.create({
        TeacherId, 
        SkillName, 
        SkillImg, 
        SkillType,
        SkillPoint
    });
    res.status(201).json({
        success: true,
        skill
    });
    }catch(error){
        next(error);
    }
};
exports.fetchSkill=async(req,res,next)=>{
    try {
      const skill = await Skill.find({TeacherId: req.params.TeacherId});
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
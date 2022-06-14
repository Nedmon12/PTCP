const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema(
  {
     TeacherId: {
      type: String,
      required: true,
    },
    SkillName: {
      type: String,
      required : [true, "please provide a skillname"],
      unique: true
      },
      SkillType: {
        type: Boolean,
        required : [true, "please provide a skillType"]
        },
    SkillPoint: {
      type: String,
      required : [true, "please provide a skillpoint"]
    },
  },
);
const Skill= mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
module.exports = Skill;
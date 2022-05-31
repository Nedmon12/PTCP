const mongoose = require("mongoose");

const SubjectSchema = mongoose.Schema(
  {
     TeacherId: {
      type: String,
      required: true,
    },
    SubjectName: {
      type: String,
      required : [true, "please provide a subjectname"]
    },
  },
);
const Subject= mongoose.models.Subject || mongoose.model("Subject", SubjectSchema);
module.exports = Subject;
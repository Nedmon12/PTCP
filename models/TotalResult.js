const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TotalResultSchema = new Schema ({
    studentid:{
        type: String,
        required : [true, "student id problem"]
      },
      teacherid:{
        type: String,
        required : [true, "teacher id"]
      },
      subjectid:{
        type:String,
        required:[true, "please provide the subject"]
      },
      subjectname:{
        type:String,
        required:[true, "please provide the subject"]
      },
      totalresult: {
            type: Number,
            required :[true, "Please provide the Result"],
      },
      reason: {
        type:String,
      }
},{timestamps: true})
const TotalResult= mongoose.models.TotalResult || mongoose.model("TotalResult", TotalResultSchema);
module.exports = TotalResult;
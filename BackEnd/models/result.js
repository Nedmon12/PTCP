const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResultSchema = new Schema ({
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
      outof:{
        type:Number,
        required:[true, "please provide the result"]
      },
      mainresult: {
            type: Number,
            required :[true, "Please provide the Result"],
      },
      reason: {
        type:String,
      }
})
const Result= mongoose.models.result || mongoose.model("Result", ResultSchema);
module.exports = Result;
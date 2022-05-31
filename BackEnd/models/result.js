const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResultSchema = new Schema ({
    studentid:{
        type: String,
        required : [true, "student id problem"]
      },
      Result: {
            Result: Number,
            type: Array,
            required :[true, "Please provide Subject id"],
            default: [],
      },

      total:{
        type: Number,
        required : [true, "please give the attendance"]
      },
      Average:{
        type: Number,
        required : [true, "please give the attendance"]
      },
      Rank:{
        type: Number,
        required : [true, "please give the attendance"]
      },
      teacherid:{
        type: String,
        required : [true, "teacher id"]
      },
    
})
const Result= mongoose.models.result || mongoose.model("Result", ResultSchema);
module.exports = Result;
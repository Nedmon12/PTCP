const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttendanceSchema = new Schema ({
    studentid : {
        type: String,
        required : [true, "student id"]
      },
      attendance : {
        type: Boolean,
        required : [true, "please give the attendance"]
      },
      teacherid : {
        type: String,
        required : [true, "teacher id"]
      },
    
})
const Attendance= mongoose.models.Attendance || mongoose.model("Attendance", AttendanceSchema);
module.exports = Attendance;
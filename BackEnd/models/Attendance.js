const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AttendanceSchema = new Schema ({
    studentid:{
        type: String,
        required : [true, "student id problem"]
      },
      attendancevalue:{
        type: Boolean,
        required : [true, "please give the attendance"]
      },
      attendancedate:{
        type: String,
        required : [true, "please give the attendance date"]
      },
      teacherid:{
        type: String,
        required : [true, "teacher id"]
      },
},{timestamps: true})
const Attendance= mongoose.models.Attendance || mongoose.model("Attendance", AttendanceSchema);
module.exports = Attendance;
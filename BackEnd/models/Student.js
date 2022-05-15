let mongoose = require('mongoose')
let Schema = mongoose.Schema

let StudentSchema = new Schema ({
    firstname: {
        type: String,
        required : [true, "please provide a name"]
      },
      lastname : {
        type: String,
        required : [true, "please provide a name"]
      },
      teacherid : {
        type: String,
        required : [true, "teacher id"]
      },
      studentclass : {
        type: String,
        required : [true, "class"]
      },
    //reference to parent here (idk yet)
    sex : String,
    Birth_Date : Date
})
const Student= mongoose.models.Student || mongoose.model("Student", StudentSchema);
module.exports = Student;
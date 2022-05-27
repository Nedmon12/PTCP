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
      pokemanUrl : {
        type: String,
        required : [true, "please provide a avater"]
      },
      teacherid : {
        type: String,
        required : [true, "teacher id"]
      },
      studentclass : {
        type: String,
        required : [true, "class"]
      },
      behaviourpoint : {
        type: Number,
        default:0
      },
    //reference to parent here (idk yet)
    sex : String,
    Birth_Date : Date
})
const Student= mongoose.models.Student || mongoose.model("Student", StudentSchema);
module.exports = Student;
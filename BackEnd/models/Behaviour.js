const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BehaviourSchema = new Schema ({
    studentid:{
        type: String,
        required : [true, "student id problem"]
      },
      Behaviourpoint:{
        type: Number,
        default: 0,
        required : [true, "please give the point"]
      },
      teacherid:{
        type: String,
        required : [true, "teacher id"]
      },
},{timestamps: true})
const Behaviour= mongoose.models.Behaviour || mongoose.model("Behaviour", BehaviourSchema);
module.exports = Behaviour;
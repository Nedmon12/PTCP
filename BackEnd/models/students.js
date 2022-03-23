let mongoose = require('mongoose')
let Schema = mongoose.Schema

let StudentSchema = new Schema ({
    First_name : String,
    Last_name : String,
    //reference to parent here (idk yet)
    sex : String,
    Birth_Date : Date
})
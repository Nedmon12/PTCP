import mongoose from "mongoose";
const ParentsSchema = mongoose.Schema({
    Parents_First_Name: String,
    Parents_Second_Name: String,
    Parents_First_Name: String, 
    username: String,
    Password: String,
    Email: String,
    Sex:String,
    Birth_date: String,
    Phone_number: String,  
    Recovery_Answer: String, 
    Student_First_Name: String, 
    Student_id: String, 
    Student_Class: String, 
    Student_School_id: String 
})
export default mongoose.models('Parents', ParentsSchema)
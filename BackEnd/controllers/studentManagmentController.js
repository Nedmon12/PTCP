const Student= require('../models/Student')
const User= require('../models/Users')

exports.addStudent= async(req,res,next) => {
    const { firstname, lastname, teacherid, studentclass } = req.body;
try{
    const student= await Student.create({
        firstname,
        lastname,
        teacherid,
        studentclass
    });
    res.status(201).json({
        success: true,
        student
    });
    }catch(error){
        next(error);
    }
};

exports.fetchStudents=async(req,res,next)=>{
        try {
          const student = await Student.find({teacherid: req.params.teacherid});
          console.log(student)
          res.status(200).json({
            success: true,  
            student
        });
        } catch (error) {
          next(error);
        }
      };
      

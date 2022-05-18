import React,{useState} from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function StudentAttendance({student, attendance}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [isAttendper, setIsAttended] = useState(attendance);
  const user = useContext(AuthContext);
  console.log(attendance)
  const AttendanceHandler = () => {
    if(attendance===true){
      attendance=false
      console.log(attendance)
      console.log("trying false")
    }
    else if(attendance===false){
      attendance=true
      console.log(attendance)
      console.log("trying true")
    }
  }
 
 console.log(attendance)
 const saveHandler= async()=>{
  const sendattendance = {
    studentid: student._id,
    attendance: attendance,
    teacherid: user._id,
  };
  try {
    await axios.post("api//studentManagmentRoutes/attendance", sendattendance);
    
  } catch (err) {
    console.log(err);
  }

}
  return (
    <div>
      <div className='studentContainer w-25 h-20 border border-gray-100 rounded-lg bg-white flex flex-col '>
          <img />
          
          <span className='StudentName font-mono text-gray-600'>{student.firstname}</span>
         <button onClick={AttendanceHandler} >
         <img className="z-10 mt-8 postProfileImg h-9 w-9 rounded-full  object-cover" 
                       src={
                        attendance
                          ? PF + "present.png"
                          : PF + "absent.png"
                      }
          alt=""/>
          </button> 
          
      </div>
      
    </div>
  )
}
export default StudentAttendance
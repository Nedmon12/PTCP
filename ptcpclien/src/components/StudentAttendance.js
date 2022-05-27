import React,{useState} from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function StudentAttendance({student, attendance}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [isAttendper, setIsAttended] = useState(attendance);
  const user = useContext(AuthContext);
  const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
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
    <div className='studentContainer w-26 h-26 '>
      
        <img className='pokeman w-16 h-16 mx-4'  src={PFavater + imageurl} alt="k" />
        <div className='w-26 h-16 border border-gray-100 rounded-lg bg-white'  >
            <span className='StudentName font-mono text-gray-600 px-4 '>{student.firstname}</span>            
        </div>
        <button onClick={AttendanceHandler} >
            <img className="z-10 -mt-24 ml-20 postProfileImg h-9 w-9 rounded-full  object-cover" 
                          src={
                            attendance
                              ? PF + "present.png"
                              : PF + "absent.png"
                          }
              alt=""/>
          </button> 
        
    </div>
  )
}
export default StudentAttendance

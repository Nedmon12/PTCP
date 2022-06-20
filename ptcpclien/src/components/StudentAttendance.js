import React,{useState, useEffect} from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
function StudentAttendance({student, setIsAttended,todaydate, save}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [Attend, setAttended] = useState(true);
  const {user} = useContext(AuthContext);
  const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
  const AttendanceHandler = () => {
    setAttended(!Attend)
  }
  useEffect(() => {
    if(save==true){
      save=false;
  const sendattendance = async () => {
    console.log(Attend)
    console.log(user.user._id)
    const setattendance = {
      studentid: student._id,
      attendancevalue: Attend,
      teacherid: user.user._id,
      attendancedate: todaydate
    };
  try {
    await axios.post("api/studentManagmentRoutes/attendance", setattendance); 
  } catch (err) {
    console.log(err);
  }
}; sendattendance();
}
}, [save]);

  return (
    <>
    <div className='studentContainer w-26 h-26 '>
      
        <img className='pokeman w-16 h-16 mx-4'  src={PFavater + imageurl} alt="k" />
        <div className='w-26 h-16 border border-gray-100 rounded-lg bg-white'  >
            <span className='StudentName font-mono text-gray-600 px-4 '>{student.firstname}</span>            
        </div>
        <button onClick={AttendanceHandler} >
            <img className="z-10 -mt-24 ml-20 postProfileImg h-9 w-9 rounded-full  object-cover" 
                          src={
                            Attend==true
                              ? PF + "present.png"
                              : PF + "absent.png"
                          }
              alt=""/>
          </button> 
    </div></>
  )

}
export default StudentAttendance

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Datemodalview from './attendance/datemodal';


export default function Dateview({student, tday}) {
  const [studentattendance, setstudentattendance]= useState([]);
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let today = tday
  const {user} = useContext(AuthContext);
  let month = d.getMonth()+1
  let year = d.getYear()-100;
  let todaydate =today+"/"+month+"/"+"20"+year; 
  let todaydate2 =today+"."+month+"."+"20"+year; 
  
  console.log(tday);  
  const [datemodal, setdatemodal]=useState(false)
  const handledateattendance=()=>{
      setdatemodal(true)
  }  
  console.log(student)
  useEffect(() => {
    const fetchattendance = async () => {
      const res = await axios.get("/api/studentManagmentRoutes/fetchattendance/"+ student._id+"/"+todaydate2 );
      setstudentattendance(res.data);
    };
    fetchattendance();
  }, [user.user._id]);
  console.log(studentattendance)
  let display="";
  let value=""
  if(studentattendance==null){
    display="Not Recorded"
  }else{
    display="recorded"
    if(studentattendance.attendancevalue==true){
      value="Present"
    }else{
      value="Absent";
    }

  }
  console.log(display)

  console.log(value)
  return (
    <div>
        <button onClick={handledateattendance} className='h-[25vh] md:h-[50vh]' >
               <div className='h-[5vh] ' >
                <span>{todaydate}</span>
                </div>
                <div className='bg-slate-100 h-[10vh] md:h-[40vh]  w-[15vh]' >
                  <span>{display}</span>
                  <hr></hr>
                  <span>{value}</span>
                </div>
            </button>
            {datemodal==true && <Datemodalview todaydate={todaydate} display={display} value={value} student={student} setdatemodal={setdatemodal}/> }
           
    </div>
  )
}

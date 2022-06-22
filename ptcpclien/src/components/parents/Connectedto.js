import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";
export default function Connected() {
    const {user}= useContext(AuthContext)
    const [student, setStudent]= useState([]);

    useEffect(() => {
        const fetchmykid = async () => {
          const res = await axios.get("/api/studentManagmentRoutes/fetchmykid/"+ user.user.studentid);
          setStudent(res.data);
        };
        fetchmykid();
      }, [user._id]);
     const [teacher, setTeacher] = useState([]);
      useEffect(() => {
        const fetchmykidteacher = async () => {
          const res = await axios.get("/api/studentManagmentRoutes/fetchmykidteacher/"+ user.user.teacherid);
          setTeacher(res.data);
        };
        fetchmykidteacher();
      }, [user.user._id]);
      console.log(user.user.teacherid)
    

  return (
    <div className='eventwrapper mt-4 ml-4 border bg-white md:w-52 w:full border-slate-200 rounded-md h-40'  >
        <div className='allevent p-3 '>
            <div className="eventTop">
                <a>
                    <span>
                        Connected Class
                    </span>
                </a>
            </div>
            <hr className="shareHr mt-4" />
            <div className="newpostBottom flex flex-col">
                <span className="teacherClass text-bs font-semibold text-gray-600 ml-3">{teacher.resposibleclass}</span>
                <span className="postUsername text-sm  ml-3">{teacher.username}</span>
            </div>
            <hr className="shareHr mt-4" />
            <div className="newpostBottom">
                <span className="postUsername text-sm  ml-3">{student.firstname} {student.lastname} </span>
            </div>
        </div>
    </div>
  )
}

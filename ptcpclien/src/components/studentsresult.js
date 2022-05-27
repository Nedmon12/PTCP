import React,{useState,useEffect} from 'react'
import StudentResult from './StudentResult'
import Addstudent from './Addstudent'
import AllStudents from './AllStudents'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import useFetch from "../hook/useFetch";

export default function Students() {

  const [modalOn, setModalOn] = useState(false);
 


  const {user} = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchStudent = async () => {
      const res = await axios.get("/api/studentManagmentRoutes/fetchstudent/"+ user._id);
      setStudents(res.data);
    };
    fetchStudent();
  }, [user._id]);
  return (
    <div className='StudentContainer p-4 min-h-full bg-slate-50'>
             <div  class="grid grid-cols-12 gap-4">
            {students.map((p)=>(
                <StudentResult key={p._id} student={p}/>
                )        
               )}
               </div>
            
    </div>
  )
}

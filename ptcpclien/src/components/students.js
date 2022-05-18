import React,{useState,useEffect} from 'react'
import Student from './Student'
import Addstudent from './Addstudent'
import AllStudents from './AllStudents'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import useFetch from "../hook/useFetch";

export default function Students() {
  

  const {user} = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchStudent = async () => {
      const res = await axios.get("/api/studentManagmentRoutes/fetchstudent/"+ user._id);
      setStudents(res.data);
    };
    fetchStudent();
  }, [user._id]);
  console.log(students)  
  return (
    <div className='StudentContainer p-4 min-h-full'>
        <div class="grid grid-cols-12 gap-4">
            <AllStudents/>
            {students.map((p)=>(
                <Student key={p._id} student={p}/>
                )        
               )}
            <Addstudent/>
            
            
            
            
        </div>
    </div>
  )
}

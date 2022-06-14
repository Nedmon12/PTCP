import React,{useState,useEffect} from 'react'
import Student from '../../../../components/Studenteditview'
import Addstudent from '../../../../components/Addstudent'
import AllStudents from '../../../../components/AllStudents'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../context/AuthContext';

export default function Editclass() {
    const {user} = useContext(AuthContext);
    const [students, setStudents] = useState([]);
    var counter=0;
    useEffect(() => {
      const fetchStudent = async () => {
        const res = await axios.get("/api/studentManagmentRoutes/fetchstudent/"+ user.user._id);
        setStudents(res.data);
      };
      fetchStudent();
    }, [user.user._id]);
    return (
    <div>
        <span className='text-base font-sans font-medium text-gray-300 px-2 py-2 w-full h-10'>Edit you class students</span>
        <div className='-mt-12' ><Addstudent/></div>
        {students.map((p)=>(
                <Student key={p._id} student={p} counter={counter++}/>
                )        
               )}
    </div>
  )
}

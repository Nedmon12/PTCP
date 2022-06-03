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
        const res = await axios.get("/api/studentManagmentRoutes/fetchstudent/"+ user._id);
        setStudents(res.data);
      };
      fetchStudent();
    }, [user._id]);
    return (
    <div>
        <span className='StudentName text-bs font-sans font-medium text-gray-300 p-2 py-2 '>Edit you class students</span>
        <div className='-mt-10' ><Addstudent/></div>
        {students.map((p)=>(
                <Student key={p._id} student={p} counter={counter++}/>
                )        
               )}
    </div>
  )
}

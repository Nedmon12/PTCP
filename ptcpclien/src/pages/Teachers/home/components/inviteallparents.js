import React,{useState,useEffect} from 'react'
import Student from '../../../../components/Studentparentinviteview'
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
    }, [user._id]);
    return (
    <div>
        
        <span className='h-[10vh] w-full StudentName text-xl font-sans font-medium text-gray-300 mt-2 mb-2 py-2 '>Invite Parents via Email </span>
        {students.map((p)=>(
                <Student key={p._id} student={p} counter={counter++}/>
                )        
               )}
    </div>
  )
}

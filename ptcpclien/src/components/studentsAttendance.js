import React,{useState,useEffect} from 'react'
import StudentAttendance from './StudentAttendance'
import Addstudent from './Addstudent'
import AllStudents from './AllStudents'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import useFetch from "../hook/useFetch";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export default function StudentsAttendance() {
  
  const [isAttend, setIsAttended] = useState(true);
  const [save, setSave]= useState(true);
  const {user} = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 
  const childFunc = React.useRef(null)
  useEffect(() => {
    const fetchStudent = async () => {
      const res = await axios.get("/api/studentManagmentRoutes/fetchstudent/"+ user.user._id);
      setStudents(res.data);
    };
    fetchStudent();
  }, [user._id]);
  const saveHandler=()=>{
    setSave(!save)
    window.location.reload();
  }
  
  
  return (
    <div className='StudentContainer p-4  h-[35vw] flex flex-col justify-between bg-white'>
        <div class="grid grid-cols-12 gap-4 p-4">
            {students.map((p)=>(
                <StudentAttendance key={p._id} student={p} setIsAttended={isAttend} save={save} />
                )        
               )}
                        
  
            
        </div>
        <div className='mt-12 attendancebutton w-full flex flex-row justify-between h-20 border rounded-lg border-slate-200 shadow-lg'>
            <div className='ml-20 flex flex-row'>
                <span className='text-cyan-500' >Select the students to change them to absent </span>
             </div>
            <button onClick={saveHandler} className='py-2 px-3 h-10 mt-3 mr-5 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600' >Save Attendance</button>
        </div>
    </div>
  )
}

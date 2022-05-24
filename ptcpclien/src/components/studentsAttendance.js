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
//import { attendance } from '../../../BackEnd/controllers/studentManagmentController';

export default function StudentsAttendance() {
  
  const [isAttend, setIsAttended] = useState(true);
  const {user} = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 
  const childFunc = React.useRef(null)
  useEffect(() => {
    const fetchStudent = async () => {
      const res = await axios.get("/api/studentManagmentRoutes/fetchstudent/"+ user._id);
      setStudents(res.data);
    };
    fetchStudent();
  }, [user._id]);
  const presentHandler = () => {
    console.log("isAttend")
    if(isAttend===false){
    setIsAttended(true);
    
  }console.log(isAttend);
  };
  const absentHandler = () => {
    if(isAttend===true){
      setIsAttended(false);
    }

  };
  
  return (
    <div className='StudentContainer p-4  h-[35vw] flex flex-col justify-between'>
        <div class="grid grid-cols-12 gap-4">
            {students.map((p)=>(
                <StudentAttendance key={p._id} student={p} attendance={isAttend}/>
                )        
               )}
                        
  
            
        </div>
        <div className='attendancebutton w-full flex flex-row justify-between  h-16 border rounded-lg border-cyan-500 '>
            <div className='ml-20 flex flex-row'>
            <button onClick={presentHandler}className='text-green-500 text-base py-2 px-3 h-10 mt-3 hover:bg-green-50 rounded-lg flex flex-row '>
                      <img className="postProfileImg h-8 w-8 rounded-full border-2 border-green-500 object-cover" 
                          src={PF+"present.png"}
                          alt=""/>
                          
                         mark All present
              </button>
                       
            <button onClick={absentHandler} className='text-red-500 text-base py-2 px-3 h-10 mt-3 mx-3 hover:bg-red-50 rounded-lg flex flex-row'>
                  <img className="postProfileImg h-8 w-8 rounded-full border-2 border-red-500 object-cover" 
                       src={PF+"absent.png"}
                       alt=""/>  
                       
                      mark All absent
             </button>
                
             </div>
            <button className='py-2 px-3 h-10 mt-3 mr-5 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600' >Save Attendance</button>
        </div>
    </div>
  )
}

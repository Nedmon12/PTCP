import React,{useContext,useEffect ,useState} from 'react'
import Navbar from "../../../components/parents/parentsnavbar"
import Header from "../../../components/parents/parentsheader"
import MessageContainer  from "../../../components/MessageContainer"
import Footer from "../../../components/Footer"
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext'
import StudentStatus from '../../../components/StudentStatus'
export default function  () {
  const {user}= useContext(AuthContext);
  const [student, setStudent]= useState([]);
  useEffect(() => {
    const fetchmykid = async () => {
      const res = await axios.get("/api/studentManagmentRoutes/fetchmykid/"+ user.user.studentid);
      setStudent(res.data);
    };
    fetchmykid();
  }, [user.user._id]);
  
  return (
    <div className='h-screen  bg-slate-50	'>
      <div>
        <Header/>
        <Navbar/>
      </div>
      <div className='maincontainer h-5/6 min-w-full'>
      <StudentStatus student={student}/>
                              
      </div>
      <div className='mt-2'>
        <Footer/>
      </div>
       
        
    </div>
  )
}

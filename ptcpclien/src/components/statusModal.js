import React, {useState, useRef, useContext, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {AuthContext }from '../context/AuthContext'
import axios from 'axios';
import StudentStatus from './StudentStatus'
import Student from './Studentparentinviteview'
import Bar from './graphs/behaviourpie'
import Resulttable from './graphs/resulttable'
import Graph from './graphs/graph'
import Donat from './graphs/donat'
import BehaviourNotification from './BehaviourNotification'
import Individualstudentstatus from './individualstudentstatus';
export default function StatusModal({setModal}) {
  const email= useRef()
  var counter=0;

  const handleCancelClick = () => {
    setModal(false)
}
  const [which, setWhich]=useState(1)
  const [whichtwo, setWhichtwo]=useState(2)
const {user} = useContext(AuthContext);
  console.log(user)
  const [behaviours, setbehaviour] = useState([]);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchStudent = async () => {
      const res = await axios.get("/api/studentManagmentRoutes/fetchstudent/"+ user.user._id);
      setStudents(res.data);
    };
    fetchStudent();
  }, [user.user._id]);
  useEffect(() => {
    const fetchallbehaviour = async () => {
      const res = await axios.get("/api/studentManagmentRoutes/behaviourallfetch/"+ user.user._id);
      setbehaviour(res.data);
    };
    fetchallbehaviour();
  }, [user.user._id]);

  const ParentsHandler=()=>{
      if(which!==1){
        setWhich(1);
      }
  }
  const wholeHandler=()=>{
    if(which!==2){
      setWhich(2);
    }
} 
const studentalone=()=>{
  if(which!==3){
    setWhich(3);
  }
}

const resultHandler=()=>{
  if(whichtwo!==1){
    setWhichtwo(1);
  }
}
const behaviourHandler=()=>{
if(whichtwo!==2){
  setWhichtwo(2);
}
}
const attendanceHandler=()=>{
  if(whichtwo!==3){
    setWhichtwo(3);
  }
}




  return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[50vw] w-[100vw] opacity-100' >
                <div className='p-3 basis 1/12 h-16 border-b border-slate-200 flex flex-row justify-between ' >
                      <span className='mt-2 text-xl text-gray-800' >Report</span>
                      <button className='pr-2 py-4' onClick={handleCancelClick} >
                                <CloseIcon fill="currentcolor"/>
                        </button>
                </div>
                <div className='basis 11/12  flex flex-row overflow-y-auto' >
                      <div className='basis-1/5 border-r h-full border-slate-200 w-[15vh] ' >
                              <div className='bg-slate-100 h-6 w-full'>
                            <span  className='flex justify-center' >Connections</span>
                              </div>
                              <button onClick={ParentsHandler} className={`text-gray-700 w-full h-12 ${which == 1 ?"bg-cyan-200":"bg-white"}`} >
                                  Parents Account
                              </button>
                              <div className='bg-slate-100 h-6 w-full'>
                            <span  className='flex justify-center' >Students</span>
                              </div>
                              <button onClick={wholeHandler} className={`text-gray-700 w-full border-b border-slate-100 h-12 ${which == 2 ?"bg-cyan-200":"bg-white"}`} >
                                  whole Students
                              </button>
                              <button onClick={studentalone} className={`text-gray-700 w-full border-b border-slate-100 h-12 ${which == 2 ?"bg-cyan-200":"bg-white"}`} >
                              {students.map((p)=>(
                              <StudentStatus key={p._id} student={p}/>
                                    )        
                                   )}
                               </button>    
                            </div>
                      <div className='basis-4/5' >
                                {which==1 ?<div className='invite flex flex-col ' >
                                              <div className='h-20 border-b border-slate-100 p-6 ' >
                                                  <span className='text-black' >Invite Parents to Class {user.user.resposibleclass}</span>
                                                  <button className='text-cyan-600 ml-4' >What can Parents Do in bearePtcp ?</button>
                                              </div>
                                              <div className='h-full border-b border-slate-100 p-6 ' >
                                                  <span className='text-black flex justify-center font-bold text-xl' >Invite Families</span>
                                                  <span className='text-black flex justify-center text-lg' >How would you like to invite your families</span>

                                                  <div>
                                                    <span className='h-[8vh] StudentName text-xl font-sans font-medium text-gray-300 mt-2 mb-2 py-2 '>Invite Parents via Email </span>
                                                    {students.map((p)=>(
                                                            <Student key={p._id} student={p} counter={counter++}/>
                                                            )        
                                                          )}
                                                  </div>
                                              
                                              
                                              </div>
                                           </div>
                                  :
                                           <div className='flex flex-col'>
                                              <div className='h-20 border-b border-slate-100 p-6 flex flex-row justify-between' >
                                                  <span className='text-black text-lg ' >Whole class {user.user.resposibleclass} Students</span>
                                                  <div className='' >
                                                      <button onClick={resultHandler} className={`rounded-l-lg  h-12 w-32 border border-cyan-500 ${whichtwo == 1 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >Result</button>
                                                      <button  onClick={behaviourHandler} className={`h-12 w-32 border border-cyan-500 ${whichtwo == 2 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >Behavious</button>
                                                      <button  onClick={attendanceHandler} className={`rounded-r-lg  h-12 w-32 border border-cyan-500 ${whichtwo == 3 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >Attendance</button>
                                                  </div>
                                              </div>
                                                    effort         

                                              </div>
                                
                          }
                      </div>
                </div>

        </div>
        </div>
        </div>
  )
}

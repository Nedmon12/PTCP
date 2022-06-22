import React, { useRef, useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {AuthContext }from '../context/AuthContext'
import axios from 'axios';
import Bar from './graphs/behaviourpie'
import Resulttable from './graphs/resulttable'
import Graph from './graphs/graph'
import Donat from './graphs/donat'
import Attendanceview from './graphs/attendanceview'
export default function StudentDetail({setStudentdetailmodal, student}) {
    const handleCancelClick = () => {
        setStudentdetailmodal(false)
  }
  const {user} = useContext(AuthContext);
  const [whichtwo, setWhichtwo]=useState(2)
  const [which, setWhich]=useState(2)

  const resultHandler=()=>{
    if(which!==1){
      setWhich(1);
    }
  }
  const behaviourHandler=()=>{
  if(which!==2){
    setWhich(2);
  }
  }
  const attendanceHandler=()=>{
    if(which!==3){
      setWhich(3);
    }
  }
  const controller=()=>{
    if(whichtwo!==1){
      setWhichtwo(1);
    }
  }
  const twocontroller=()=>{
  if(whichtwo!==2){
    setWhichtwo(2);
  }
  }
  const threeController=()=>{
    if(whichtwo!==3){
      setWhichtwo(3);
    }
  }
  
  
    
    return (
      <div className='bg-zinc-rgba fixed inset-0 z-50' >
      <div className='flex h-screen justify-center items-center ' >
          <div className='bg-white  border-gray-500 rounded-2xl flex flex-col sm:h-[60vw] sm:w-[70vw]  md:h-[52vw] md:w-[80vw] opacity-100' >
                  <div className='basis-1/12 flex flex-row h-12 justify-between border-b-2 border-slate-100' >
                              <span class="block tracking-wide text-gray-700 text-lg font-medium pl-4 py-4 ">{student.firstname} {student.lastname} Status</span>
                              <button className='pr-2 py-4' onClick={handleCancelClick} >
                                  <CloseIcon fill="currentcolor"/>
                              </button>
                    </div>
                    <div className='basis-11/12' >
                        <div className='h-12 p-6 flex flex-col md:flex-row justify-between' >
                            <div className='' >
                            <button onClick={resultHandler} className={`rounded-l-lg  h-12 w-32 border border-cyan-500 ${which == 1 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >Result</button>
                            <button  onClick={behaviourHandler} className={`h-12 w-32 border border-cyan-500 ${which == 2 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >Behavious</button>
                            <button  onClick={attendanceHandler} className={`rounded-r-lg  h-12 w-32 border border-cyan-500 ${which == 3 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >Attendance</button>
                            </div>
                            <div className='h-6 p-3' >
                                <button onClick={controller} className={`rounded-l-lg  h-6 w-10 border border-cyan-500 ${whichtwo == 1 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >1</button>
                                <button  onClick={twocontroller} className={`h-6 w-10 border border-cyan-500 ${whichtwo == 2 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >2</button>
                                <button  onClick={threeController} className={`rounded-r-lg  h-6 w-10 border border-cyan-500 ${whichtwo == 3 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >3</button>
                            </div>
                        </div>
                        <div className='mt-16 md:mt-10' >
                        {which==1 ?
                            <div>
                                <div className='p-4 min-h-full'>
                                    Result
                                </div>    
                            </div> 
                        : which==2 ?
                            <div>
                                {whichtwo==1 ?
                                     <div>
                                                     <div className='p-4 min-h-full'>
                                                        <Donat/>
                                                     </div>    
                                                  </div> 
                                : whichtwo==2 ?
                                              <div>
                                                  
                                                  <Graph/> 
                                              </div> 
                                :
                                              <div>
                                                 <Bar/>
                                              </div>
                                }                                         
                            </div> 
                                              :
                                              <div>
                                                 <Attendanceview student={student} />
                                              </div>
                                              }
                        </div>
                    </div>
              
              
              </div>
          </div>
          </div>
    )
  }
  
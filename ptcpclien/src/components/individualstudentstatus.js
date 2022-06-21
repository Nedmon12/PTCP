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

export default function Individualstudentstatus({student}) {
    const [whichtwo, setWhichtwo]=useState(2)
    const {user} = useContext(AuthContext);
  const [behaviours, setbehaviour] = useState([]);
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
    <div >
        <div className='flex flex-col'>
            <div className='h-20 border-b border-slate-100 p-6 flex flex-row justify-between' >
                <span className='text-black text-lg ' >{student.firstname} {user.user.resposibleclass} Students</span>
                <div className='' >
                    <button onClick={resultHandler} className={`rounded-l-lg  h-12 w-32 border border-cyan-500 ${whichtwo == 1 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >Result</button>
                    <button  onClick={behaviourHandler} className={`h-12 w-32 border border-cyan-500 ${whichtwo == 2 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >Behavious</button>
                    <button  onClick={attendanceHandler} className={`rounded-r-lg  h-12 w-32 border border-cyan-500 ${whichtwo == 3 ?"bg-cyan-500 text-white":"bg-white text-cyan-500"}`} >Attendance</button>
                </div>
            </div>
            {whichtwo==1 ?
                <div>
                    <div className='p-4 min-h-full'>
                        <Resulttable/> 
                    </div>    
                </div> 
          : whichtwo==2 ?
                <div>
                    <Bar/> 
                    <Graph/> 
                    <Donat/>
                    {behaviours.map((b)=>(
                      <BehaviourNotification key={b._id} behaviour={b}/>
                     )        
                     )}
                </div> 
             :
                <div>
                    <Bar/> 
                    <Graph/>
                </div>
            }                                                                                        
        </div>            
    </div>
  )}

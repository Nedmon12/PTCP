import React, { useState, useContext, useEffect } from 'react'
import Navbar from "../../../components/NavbarforTeacher"
import Post from "../../../components/Post"
import Event from "../../../components/events"
import NewPost from "../../../components/newpost"
import { AuthContext } from '../../../context/AuthContext'
import useFetch from '../../../hook/useFetch'
import axios from "axios";
import EditClass from './components/editclass'
import InviteParentModal from '../../../components/inviteParentModal'
import InviteAllParent from '../home/components/inviteallparents'
import AddSkill from '../home/components/addskill'
import AddSubject from '../home/components/addsubject'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const {user}= useContext(AuthContext)
    const navigate= useNavigate()
    const [ispostive, setpostive] = useState(1);
    const ExamHandler = () => {
        if(ispostive!==1)
        setpostive(1);
      };
      const TestHandler = () => {
        if(ispostive!==2)
        setpostive(2);
      };  
      const AssignmentHandler = () => {
        if(ispostive!==3)
        setpostive(3);
      };  
      const otherHandler = () => {
        if(ispostive!==4)
        setpostive(4);
      };
      const totalHandler = () => {
        if(ispostive!==5)
        setpostive(5);
      };const AverageHandler = () => {
        if(ispostive!==6)
        setpostive(6);
      };  
      const closehandler = () => {
        navigate('/thome')
      };  
      
 


  return (
    <div className='totalcontainer'>
        <div  className='sticky top-0 '>
        <Navbar/>
        </div>
        <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen p-5 justify-center items-center ' >
        <div className='bg-white   border-gray-500 rounded-2xl flex flex-col h-[45vw] w-[65vw] opacity-100' >
              <div className='postandeventcontainer flex flex-row bg-white p-2 '>    
                  <div className='containerofsetting border-2 border-slate-100 mt-2 h-[100vh] w-full flex flex-col bg-white'>
                      <div className=''>
                              <div className='flex flex-row justify-between'>
                                  <span className=' text-lg text-gray-800' >Edit ClassRoom 4A</span>
                                  <button onClick={closehandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 7 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                                      <CloseIcon/>
                                </button>
                                
                                  </div>
                              <div className='skillnavbar flex flex-row border-b border-slate-100 mt-3 ' >
                  
                              <button onClick={ExamHandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 1? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                                  Students
                                </button>
                              <button onClick={TestHandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 2 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                                  Invite Parents
                                </button>
                                <button onClick={AssignmentHandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 3 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                                  Manage Skill
                                </button>
                              <button onClick={otherHandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 4 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                                  Manage Subject
                                </button>
                               
                                  
                              </div>
                              <div className=' h-[36vw] overflow-y-auto '>
                        {ispostive==1 ?
                            <EditClass ispostive={1}/>
                            :ispostive==2 ?
                            <InviteAllParent ispostive={2}/>
                            :ispostive==3 ?
                            <AddSkill ispostive={3}/>
                            :ispostive==4 ?
                            <AddSubject ispostive={4}/>
                        
                        :
                          <EditClass ispostive={7}/>
                        }
                        </div>
                  </div>
              </div>
              </div>
              </div>
              </div>      
    </div>
    </div>
  )
}

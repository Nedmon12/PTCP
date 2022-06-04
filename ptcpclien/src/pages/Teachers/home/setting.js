import React, { useState, useContext, useEffect } from 'react'
import Navbar from "../../../components/NavbarforTeacher"
import Post from "../../../components/Post"
import Event from "../../../components/events"
import NewPost from "../../../components/newpost"
import Sidebar from '../../../components/Sidebar'
import { AuthContext } from '../../../context/AuthContext'
import useFetch from '../../../hook/useFetch'
import axios from "axios";
import EditClass from './components/editclass'
import InviteParentModal from '../../../components/inviteParentModal'
import InviteAllParent from '../home/components/inviteallparents'
import AddSkill from '../home/components/addskill'
export default function Home() {
    const {user}= useContext(AuthContext)
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
      const rankHandler = () => {
        if(ispostive!==1)
        setpostive(7);
      };  
      
 


  return (
    <div className='totalcontainer'>
        <div  className='sticky top-0 '>
        <Sidebar/>
        <Navbar/>
        </div>
        <div className='postandeventcontainer flex flex-row bg-slate-50'>    
            <div className='sidebar basis-1/6' ></div>
            <div className='containerofsetting border-2 border-slate-100 mt-2 h-[100vh] w-full basis-4/6 flex flex-col bg-white'>
                <div className=''>
                        <div>
                            <span className=' text-lg text-gray-800' >Edit ClassRoom 4A</span>
                            </div>
                        <div className='skillnavbar flex flex-row border-b border-slate-100 mt-3 ' >
            
                        <button onClick={ExamHandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 1? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Students
                          </button>
                        <button onClick={TestHandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 2 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Invite Parents
                          </button>
                          <button onClick={AssignmentHandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 3 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Add Skill
                          </button>
                        <button onClick={otherHandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 4 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Other
                          </button>
                          <button onClick={totalHandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 5 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Results
                          </button>
                          <button onClick={AverageHandler} type="button" class={`px-10 py-2 inline-flex items-center  text-gray-700 text-base rounded-lg ${ispostive == 6 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Average
                          </button>
                          <button onClick={rankHandler} type="button" class={`px-10 py-2 inline-flex items-center   text-gray-700 text-base rounded-lg ${ispostive == 7 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Rank
                          </button>
                            
                        </div>
                        <div className=' h-[36vw] overflow-y-auto '>
                  {ispostive==1 ?
                      <EditClass ispostive={1}/>
                      :ispostive==2 ?
                      <InviteAllParent ispostive={2}/>
                      :ispostive==3 ?
                      <AddSkill ispostive={3}/>
                   :
                    <EditClass ispostive={7}/>
                  }
                  </div>
            </div>
            <div className='leftbar basis-1/6'></div>
        </div>
    
    
    </div>
    </div>
  )
}

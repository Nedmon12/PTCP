import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Skill from './Skill';
import Subjects from './subjects';

import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import AddSubject from './AddSubject'
import { AuthContext } from '../context/AuthContext';

function Student({setModalOn, student}) {
  const [subject, setSubject] = useState([]);
  const [negativeskills, setnegativeskills]= useState([]);
  const [ispostive, setpostive] = useState(1);
  const location = useLocation();
  const user = useContext(AuthContext);
  console.log(user.user._id)
  const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
  const handleCancelClick = () => {
    setModalOn(false)
}
console.log(student)
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

useEffect(() => {
  const fetchSubject = async () => {
    const res = await axios.get("/api/class/fetchallsubject/" + user.user._id);
    setSubject(res.data);
  };
  fetchSubject();
}, [user.user._id]);

useEffect(() => {
  const fetchSkills = async () => {
    const res = await axios.get("/api/class/fetchnegativeskill/" + user.user._id);
    setnegativeskills(res.data);
  };
  fetchSkills();
}, [user.user._id]);



return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[45vw] w-[90vw] opacity-100' >
            <div className='flex flex-row'>
                <div className='basis-1/4 flex flex-col border-r border-slate-200 justify-between' >
                <div className=' h-[41vw] border-b border-slate-200 flex flex-col'>
                      <div className='w-10 h-10 ml-64 mt-40 firstone bg-green-500 text-white rounded-full border border-gray-300' >
                          <span className='font-bold p-3' >55</span>
                      </div>
                      <img className='pokeman w-44 h-44 mx-24 '  src={PFavater + imageurl} alt="k" />
                      <span class="block tracking-wide text-gray-700 text-xl font-bold px-40 py-4 mb-32 ">{student.firstname}</span>
                      <span class="w-full h-12 text-gray-700 text-bs  px-4 py-2  border border-slate-100 bg-slate-100">Currently ranked 2 in class</span>
                      <span class="w-full h-12 text-gray-700 text-bs  px-4 py-2 border border-slate-100 bg-slate-100">With Average of 94.5</span>

                      </div>
                      <div className='h-[4vw] '>
                          <div className='pt-3 pl-5 flex flex-row' >
                          <div className='pl-10 pt-2 text-cyan-500' >
                              <AddCircleIcon fill="currentColor align-center"/>
                          </div>
                              <span className="shareOptionText text-cyan-500 text-lg pl-2 pt-2">Invitee {student.firstname}'s Parent</span>
                      </div>
                    </div>    
                
              </div>
              
              <div className='basis-3/4 flex flex-col '>
                  <div className='h-[6vw]  border-b border-slate-200 flex flex-col  justify-between'>
                       <div className='flex flex-row h-12 justify-between' >
                            <span class="block tracking-wide text-gray-500 text-lg font-bold pl-4 py-4 ">Give Feedback to {student.firstname}</span>
                            <button className='pr-2 py-4' onClick={handleCancelClick} >
                                <CloseIcon fill="currentcolor"/>
                            </button>
                        </div>
                        <div className='skillnavbar flex flex-row' >
                      
                        <button onClick={ExamHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive == 1? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Final Exam
                          </button>
                        <button onClick={TestHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive == 2 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Test
                          </button>
                          <button onClick={AssignmentHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive == 3 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Assignment
                          </button>
                        <button onClick={otherHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive == 4 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Other
                          </button>
                          <button onClick={totalHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive == 5 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Total
                          </button>
                          <button onClick={AverageHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive == 6 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Average
                          </button>
                          <button onClick={rankHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive == 7 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Rank
                          </button>
                            
                        </div>
                  </div> 
                  <div className=' h-[36vw] overflow-auto '>
                    <div className='px-16 py-6 grid grid-cols-4 gap-3' >
                  {ispostive==1 ?  subject.map((s)=>(
                      <Subjects key={s._id} subject={s} ispostive={true} student={student}/>
                      )        
                       ):
                    negativeskills.map((s)=>(
                      <Skill key={s._id} skill={s} ispostive={false}/>
                      ))        
                  }
                      <AddSubject/>
                    </div>
                  </div>
              </div>
            </div>      
          </div>
       </div>
    </div>
    )
}

export default Student
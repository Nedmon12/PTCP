import React, { useRef, useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {AuthContext }from '../../../context/AuthContext'
import axios from 'axios';
import Student from '../../StudentStatus';

export default function Datemodal({setdatemodal,todaydate,display, value ,student}) {
  const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
  const handleCancelClick = () => {
    setdatemodal(false)
}
const {user} = useContext(AuthContext);
  if(display=="recorded"){
    display=value;
  }
  return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-lg flex flex-col mx-auto h-[55vh] w-[40] md:h-[42vw] md:w-[32vw] opacity-100' >
                <div className='basis-1/12 flex flex-row h-16 justify-between border-b-2 border-slate-100' >
                            <span class="block tracking-wide text-gray-700 text-base font-medium pl-4 py-4  ">View {student.firstname} Attendance Record</span>
                            <button className='pr-2 py-4' onClick={handleCancelClick} >
                                <CloseIcon fill="currentcolor"/>
                            </button>
                  </div>
                  <div className='basis-2/12 flex flex-col h-[2vh] bg-gray-100  justify-center' >
                        <span class="block tracking-wide text-gray-800 text-xl font-medium pl-4 py-4  ">{todaydate}</span>
                        <span class="block tracking-wide text-gray-500 text-bs font-medium pl-4 py-4  ">{display}</span>        
                  </div>
                     <div className='basis-8/12 flex flex-row mt-10' >
                     <div className='bg-white border-b border-slate-100 text-white w-full h-16 flex flex-row justify-between py-2' >
                          <div className='w-26 h-16 rounded-lg flex flex-row'>
                                <img className='pokeman w-12 h-12 mx-4 -mt-4 '  src={PFavater + imageurl} alt="k" />
                                <span className='StudentName  text-gray-700  '>{student.firstname}</span>
                                <span className='StudentName  text-gray-700 '>{student.lastname}</span>
                            </div>
                            <div className='w-26 h-16 rounded-lg p-4'>
                                <span className={`StudentName  text-gray-700 px-3 py-4${display==="Present" ? "text-green-500" : display=="Absent" ? "text-red-500" :"text-gray-700" } `}>{display} Today</span>
                             </div>  
                            
                    </div>
                     </div>
                     <div className='md:basis-3/12 flex flex-row-reverse justify justify-between mt-10 p-2 border-t border-slate-100' >
                          <button className=' rounded-xl w-[6vw] SendButton px-2 bg-cyan-500 text-white h-10 ' onClick={handleCancelClick} >
                                    Cancel
                                </button>
                        </div>
     </div>
  </div>
</div>
  )
}

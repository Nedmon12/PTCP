import React ,{useState, useContext, useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Subject from './subjects';
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';
export default function AddSubjectmodal({seteditSubjectmodal, subject}) {
    const handleCancelClick = () => {
      seteditSubjectmodal(false)    
    }
    console.log(subject.SubjectName)
    const newsubject =useRef()
    const {user} =useContext(AuthContext);
    
    const handleClick = async (e) => {
      e.preventDefault();
        const subjectsent = {
          TeacherId: user.user._id,
          SubjectName: subject.current.value
        };
        try {
          await axios.post("api/class/addsubject", subjectsent);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      
    };
    return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[20vw] w-[32vw] opacity-100' >
        <div className='basis-1/6 flex flex-row h-12 justify-between border-b-2 text-white border-slate-100 rounded-t-xl bg-cyan-500 ' >  
            <span class="block tracking-wide boreder-2 border-slate-100 text-white text-lg font-medium pl-4 py-4 hover:text-bs ">Edit Subject {subject.SubjectName}</span>
            <button className='pr-2 py-4 text-white' onClick={handleCancelClick} >
               <CloseIcon fill="currentcolor"/>
            </button> 
        </div>
        <div className='mt-16 px-4 pr-4 h-[18vh]' >
        <input ref={newsubject}  required  id="number" type="text" placeholder={subject.SubjectName}className="mr-4 w-full rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 border  h-10"/>
                
            </div>
            <div className='basis-1/6 flex flex-row justify justify-between mt-10 p-2' >
                      <button onClick={handleClick} className=" rounded-sm w-[18vw] SendButton px-2 -mt-4 text-red-500  h-10 " type="submit ">
                            <span>Remove Subject</span>
                        </button>
                        <div className='-mt-4' >
                          <button className=' rounded-xl w-[6vw] SendButton px-2 text-cyan-500  h-10 ' onClick={handleCancelClick} >
                                    Cancel
                                </button>
                          <button onClick={handleClick} className=" rounded-xl w-[6vw] SendButton  px-2  text-white bg-cyan-500  h-10 " type="submit ">
                                update
                            </button>
                        </div>
                </div>    
        </div>
        </div>
        </div>
        )
}

import React ,{useState, useContext, useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Subject from './subjects';
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';
export default function AddSubjectmodal({setaddSubjectmodal}) {
    const handleCancelClick = () => {
        setaddSubjectmodal(false)    
    }
    const subject =useRef()
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
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[16vw] w-[32vw] opacity-100' >
        <div className='basis-1/6 flex flex-row h-16 justify-between border-b-2 text-white border-slate-100 rounded-t-xl bg-cyan-500 ' >  
            <span class="block tracking-wide boreder-2 border-slate-100 text-white text-lg font-medium pl-4 py-4 hover:text-bs ">Add new Subject</span>
            <button className='pr-2 py-4 text-black' onClick={handleCancelClick} >
               <CloseIcon fill="currentcolor"/>
            </button> 
        </div>
        <div className='mt-10' >
        <input ref={subject}  required  id="number" type="text" placeholder="Subject name"className=" rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 w-[24vw] border  h-10"/>
                <button onClick={handleClick} className=" rounded-sm w-[6vw] SendButton p-2 text-white bg-cyan-500  h-10 " type="submit ">
                    save
                </button>
            </div>
        </div>
        </div>
        </div>
        )
}

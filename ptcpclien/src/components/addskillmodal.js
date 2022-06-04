import React, {useState,useRef} from 'react'
import CloseIcon from '@mui/icons-material/Close';

import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import EditStudentModal from './editstudentModal'
function InviteallStudentparentview({setaddskillmodal}) {
  const {user} = useContext(AuthContext);
  
  const closeHandler = () => {
    setaddskillmodal(false)
}
  return (
    <>
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[16vw] w-[32vw] opacity-100' >
        <div className='basis-1/4 flex flex-row h-16 justify-between border-b-2 border-slate-100' >
                            <span class="block tracking-wide text-gray-700 text-lg font-medium pl-4 py-4 ">Add new skll</span>
                            <button className='pr-2 py-4' onClick={closeHandler} >
                                <CloseIcon fill="currentcolor"/>
                            </button>
                  </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default InviteallStudentparentview
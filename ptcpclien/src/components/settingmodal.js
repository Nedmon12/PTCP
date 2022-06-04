import React, { useRef, useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {AuthContext }from '../context/AuthContext'
import axios from 'axios';

export default function settingmodal({sethandler}) {
    const handleCancelClick = () => {
    sethandler(false)
}

  return (
    <div className='bg-zinc-rgba fixed inset-0 z-50 min-h-full min-w-full' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[16vw] w-[32vw] opacity-100' >
                <div className='basis-1/4 flex flex-row h-16 justify-between border-b-2 border-slate-100' >
                            <span class="block tracking-wide text-gray-700 text-lg font-medium pl-4 py-4 ">Invite 's parents</span>
                            <button className='pr-2 py-4' onClick={handleCancelClick} >
                                <CloseIcon fill="currentcolor"/>
                            </button>
                  </div>
            </div>
        </div>
        </div>
        
  )
}

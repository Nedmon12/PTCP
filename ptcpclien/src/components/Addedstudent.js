import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function Addedstudent() {
  return (
    <div className='flex flex-row justify-between h-10 border-b border-slate-200'>
         <div className='flex flex-row ml-2' >
            <span class="block tracking-wide text-gray-400 text-base pl-1 py-2 ">ned</span>
            <span class="block tracking-wide text-gray-400 text-base pl-1 py-2 ">girum</span>
            </div>
                <button className='pr-2' >
                    <CloseIcon/>
                </button>
    </div>
  )
}

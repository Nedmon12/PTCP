import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
export default function Skill() {
  return (
    <button  className='border border-slate-100 w-full h-32  rounded-lg bg-slate-100 justify-items-center hover:bg-slate-300 hover:h-36' >
        <div className='w-14 h-14 p-3 ml-20 mt-2 text-cyan-500 rounded-full border-2 border-cyan-500' >
      <EditIcon fill='currentcolor' />
    </div>

<span className='text-xl ' >Add Subject</span>
</button>
  )
}

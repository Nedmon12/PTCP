import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
export default function ParentsMessages() {
  return (
    <div className='RecentparenrtMessages w-full h-20 text-cyan-400 hover:bg-cyan-100 cursor-pointer flex flex-row'>
        <div className='profileplace basis-1/4 ' >
            <img className="postProfileImg ml-3 h-10 w-10  border border-cyan-400 rounded-full object-cover" src="assets/profile/1.jpg"alt=""/>   
        </div>
        <div className='Desc basis-3/4 ' >
            <div><span className="shareOptionText text-black text-sm">Abel Dejene's Parent</span></div>
            <div><span className="shareOptionText text-gray-500 text-xs">I recieved</span></div>
        </div>

    </div>
  )
}

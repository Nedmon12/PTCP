import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import axios from 'axios'
export default function AllParents() {
  //const {allParents} = axios.get('/api/parents')
  return (
    <div className='RecentparenrtMessages w-full h-16 text-cyan-400 hover:bg-cyan-50 cursor-pointer'>
        <div className='pt-3 pl-5 flex flex-row' >
            <div className='w-10 h-10 border rounded-full border-cyan-200' ><GroupIcon fill="currentColor" className="shareIcon pl-2 pt-1.5 " /></div>
            <span className="shareOptionText text-black pl-3 pt-2">All Parents</span>
        </div>
    </div>
  )
}

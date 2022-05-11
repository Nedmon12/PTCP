import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Topbar() {
    const {user} = useContext(AuthContext)
    const PF= process.env.REACT_APP_PUBLIC_FOLDER
    return (
    <div className='w-screen h-8 bg-cyan-500 border-b border-slate-400 flex flex-row' >
        <div className='profileimg'>
        <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "profile/noAvatar.png"
            }
            alt=""
            className="topbarImg h-7 w-7 rounded-full border border-cyan-400 object-cover"
          />
        </div>   
        <div className=''>
                <span className="Username text-white text-sm font-bold ml-3">{user.username}</span>
        </div> 
        <div className='logout'>
            <button className='logout bg-white border-2 rounded-sm ml-8'>
              Logout
            </button>
        </div>
    </div>
  )
}

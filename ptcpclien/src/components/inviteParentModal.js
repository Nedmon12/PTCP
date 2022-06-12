import React, { useRef, useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {AuthContext }from '../context/AuthContext'
import axios from 'axios';

export default function InviteParentModal({setInviteStudentParent, student}) {
  const email= useRef()
  const handleCancelClick = () => {
    setInviteStudentParent(false)
}
const {user} = useContext(AuthContext);

const handleClick = async (e) => {
  e.preventDefault();
    const inviteparent = {
      teacherid: user.user._id,
      studentid: student._id,
      usertype: "parent",
      email: email.current.value,
    };
    try {
      await axios.post("api/auth/inviteuser", inviteparent);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  
};
  return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[16vw] w-[32vw] opacity-100' >
                <div className='basis-1/4 flex flex-row h-16 justify-between border-b-2 border-slate-100' >
                            <span class="block tracking-wide text-gray-700 text-lg font-medium pl-4 py-4 ">Invite {student.firstname} {student.lastname}'s parents</span>
                            <button className='pr-2 py-4' onClick={handleCancelClick} >
                                <CloseIcon fill="currentcolor"/>
                            </button>
                  </div>
                  <div className='basis-3/4 flex flex-row mt-10' >
                      <input required ref={email} id="email" type="email" placeholder="Parent Email"className=" rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 w-[24vw] border  h-10"/>
                       <button onClick={handleClick} className=" rounded-sm w-[6vw] SendButton p-2 text-white bg-cyan-500  h-10 " type="submit ">
                            Inivte
                        </button>
            </div>
        </div>
        </div>
        </div>
  )
}

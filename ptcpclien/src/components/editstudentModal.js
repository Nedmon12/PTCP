import React, { useRef, useState,useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {AuthContext }from '../context/AuthContext'
import axios from 'axios';
import InviteParentModal from './inviteParentModal';
export default function ExamstudentModal({setModal, student}) {
  const email= useRef()
  const [inviteStudentParent, setInviteStudentParent]=useState([false]);
  const handleCancelClick = () => {
    setModal(false)
}
const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;


const {user} = useContext(AuthContext);
  console.log(user)
  console.log(student);
  const inviteHandler=()=>{
    setInviteStudentParent(true);
  
  }

const handleClick = async (e) => {
  e.preventDefault();
    const inviteparent = {
      teacherid: user._id,
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
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[38vw] w-[50vw] opacity-100' >
                <div className='basis-1/12 flex flex-row h-16 justify-between border-b-2 border-slate-100' >
                            <span class="block tracking-wide text-gray-700 text-lg font-medium pl-4 py-4 ">{student.firstname} {student.lastname}</span>
                            <button className='pr-2 py-4' onClick={handleCancelClick} >
                                <CloseIcon fill="currentcolor"/>
                            </button>
                  </div>
                  <div className='basis-10/12 flex flex-row h-16 justify-between border-b-2 border-slate-100' >
                         <div className='flex flex-col' >
                                <div className='p-4 ml-10'>
                                  <div className=' h-[25vh] w-[25vh] border border-slate-20 shadow-md' >
                                        <img className='p-4 pokeman w-[20vh] h-[20vh] mx-4 '  src={PFavater + imageurl} alt="k" />
                                  </div>
                                  <div>
                                  <button className="mt-4 rounded-xl w-[12vw] SendButton  px-2  text-cyan-500 border border-cyan-500 shadow-sm  h-10 " type="submit ">
                                      View Report
                                  </button>
                                  </div>

                                </div>
                          </div>
                          <div className='flex flex-col' >
                            <div class="flex flex-wrap mt-4">
                                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                      <label class="block uppercase tracking-wide text-gray-700 text-sm font-semibold mb-2" for="grid-first-name">
                                        First Name
                                      </label>
                                  <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={student.firstname}>
                                    </input>
                                  <p class="text-red-500 text-xs italic"></p>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                  <label class="block uppercase tracking-wide text-gray-700 text-sm font-semibold mb-2" for="grid-last-name">
                                    Last Name
                                  </label>
                                  <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={student.lastname}>
                                  </input>
                                </div>
                            </div>
                            <div className='px-4' >
                                <label class="block tracking-wide text-gray-700 text-sm font-semibold mb-2" for="grid-last-name">
                                      In Class
                                    </label>
                                    <input type="text" id="disabled-input-2" class="appearance-none block w-full text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={user.user.resposibleclass} disabled readonly></input>

                            </div>
                            <div className='px-4' >
                                <label class=" mt-4 block tracking-wide text-gray-700 text-sm font-semibold mb-2" for="grid-last-name">
                                      Parents
                                    </label>
                                    <div className='h-[25vh] w-full border border-slate-200 '>
                                      <button onClick={inviteHandler} >
                                        <span className="shareOptionText text-cyan-500 text-lg pl-2 pt-2">Connect {student.firstname}'s Parent</span>
                                        </button>
                                        {inviteStudentParent==true && <InviteParentModal setInviteStudentParent={setInviteStudentParent} student={student}/>}
                                    </div>
                  
                          
                            </div>
                          
                          </div>   
                  </div>
                  <div className='basis-1/12 flex flex-row justify justify-between mt-10 p-2' >
                      <button className=" rounded-sm w-[18vw] SendButton px-2 -mt-4 text-red-500  h-10 " type="submit ">
                            <span>Remove Student From ClassRoom</span>
                        </button>
                        <div className='-mt-4' >
                          <button className=' rounded-xl w-[6vw] SendButton px-2 text-cyan-500  h-10 ' onClick={handleCancelClick} >
                                    Cancel
                                </button>
                          <button className=" rounded-xl w-[6vw] SendButton  px-2  text-white bg-cyan-500  h-10 " type="submit ">
                                Save
                            </button>
                        </div>
                </div>
        </div>
        </div>
        </div>
  )
}

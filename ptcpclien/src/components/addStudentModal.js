import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Addedstudent from './Addedstudent';
import { useContext, useRef } from "react";
import axios from "axios";
import { AuthContext } from '../context/AuthContext';
export default function AddStudentModal({setModalOn}) {
    const firstname=useRef();
    const lastname=useRef();
    const { user } =useContext(AuthContext)
    const handleCancelClick = () => {
        setModalOn(false)
    }
    const randomPoKemanId=Math.floor(Math.random()*17)+1;
   
    
   const addStudent=async (e) => {
    e.preventDefault();
    //const pokeman= (await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPoKemanId}`)).data;
    //console.log(pokeman)
    
    if (firstname.current.value === null ) {
      firstname.current.setCustomValidity("Enter first name!");
    }else if (lastname.current.value === null ) {
        lastname.current.setCustomValidity("Enter last name!");
    } else {
      const Student = {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        pokemanUrl:randomPoKemanId,
        teacherid: user._id,
        studentclass:user.resposibleclass
         };
      try {
        console.log(Student)
        await axios.post("api/studentManagmentRoutes/addstudent", Student); 
        window.location.reload();

    }
       catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
        <div className='flex h-screen justify-center items-center ' >
            <div className='bg-white border-zinc-700 rounded-xl flex flex-col h-[35vw] w-[35vw]' >
                <div className='flex flex-row justify-between h-16 border-b border-slate-200' >
                    <span class="block tracking-wide text-gray-700 text-lg font-bold pl-4 py-4 ">Add Students</span>
                    <button className='pr-2' onClick={handleCancelClick} >
                        <CloseIcon/>
                    </button>
                </div>
                <form class="flex flex-wrap mb-6" onSubmit={addStudent}>
                    <div class="w-full px-3  border-b border-slate-200">
                        <label class="block tracking-wide text-zinc-700 text-base m-3  " for="grid-password">
                            Add Student By Full name
                        </label>
                        <input ref={firstname} class="ml-2  w-[33vw] bg-gray-200 text-zinc-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-zinc-700" id="grid-password" type="name" placeholder="Girum"></input>
                        <input ref={lastname} class="ml-2  w-[33vw] bg-gray-200 text-zinc-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-zinc-700" id="grid-password" type="name" placeholder="Gizachew"></input>
                        <p class="text-zinc-700 text-xs pb-3 ">Write the first and last name</p>
                    </div>
                    <div className='students-container w-full flex flex-col' >
                        <div className='addedstudent p-2 border-b w-full border-slate-100 '>
                            <span className='text-sm text-gray-400  ml-2' > 2 </span>
                            <span className='text-sm text-gray-400' >Students</span>
                        </div>
                    </div>
                    <div className='addedstudents w-full h-64 border-b border-slate-200' >
                        
                    </div>
                    <div className='submitandimport w-full flex flex-row justify-between py-4 px-2' >
                        <button className='copypaste text-cyan-500 text-base'>Copy paste your student lists</button>
                        <button type="submit" className='copypaste text-white text-base bg-cyan-500 w-20 rounded-xl px-4 py-1 mr-3'>Save</button>
                    </div>
                </form>                
            </div>
        </div>
    </div>
  )
}

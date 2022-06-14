import React, {useState,useRef} from 'react'
import CloseIcon from '@mui/icons-material/Close';

import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import EditStudentModal from './editstudentModal'
function InviteallStudentparentview({setaddskillmodal}) {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const skillname=useRef()
  const point=useRef()
  const closeHandler = () => {
    setaddskillmodal(false)
}
const Skillhandler=async (e) => {
  e.preventDefault();
  //const pokeman= (await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPoKemanId}`)).data;
  //console.log(pokeman)
  
  if (skillname.current.value === null ) {
    skillname.current.setCustomValidity("Enter first name!");
  }else {
    const Skill = {
      TeacherId:user.user._id, 
      SkillName:skillname.current.value, 
      SkillImg:"",
        SkillType:"true",
        SkillPoint:point.current.value
       };
    try {
      await axios.post("api/class/addskill", Skill); 
      window.location.reload();

  }
     catch (err) {
      console.log(err);
    }
  }
};
  return (
    <>
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[38vw] w-[30vw] opacity-100' >
        <div className='basis-1/12 flex flex-row h-16 justify-between border-b-2 border-slate-100' >
                            <span class="block tracking-wide text-gray-700 text-lg font-medium pl-4 py-4 ">New skill</span>
                            <button className='pr-2 py-4' onClick={closeHandler} >
                                <CloseIcon fill="currentcolor"/>
                            </button>
                  </div>
                  <div className='basis-10/12 p-6 border-b border-slate-200' >
                    <img className='p-4 pokeman w-[15vh] h-[15vh] bg-slate-200 border border-slate-500 mt-12 ml-40 '  src={PF+"up.png"} alt="k" />
                  
                    <div class="flex flex-row p-5">
                    <div class="">
                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Skill Name
                      </label>
                    </div>
                    <div class="">
                     <input ref={skillname} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500" id="inline-full-name" type="text" placeholder="Class Activity">
                     </input>
                    </div>
                  </div>

                  <div class="flex flex-row p-2">
                    <div class="">
                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        point Weight
                      </label>
                    </div>
                    <div class="inline-block relative w-64">
                        <select ref={point} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus<.:outline-none focus:shadow-outline">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                  
                  <div className='basis-1/12 flex flex-row-reverse justify-between p-2' >
                        <div className='' >
                          <button className=' rounded-xl w-[6vw] SendButton px-2 text-cyan-500  h-10 ' onClick={closeHandler} >
                                    Cancel
                                </button>
                          <button onClick={Skillhandler} className=" rounded-xl w-[6vw] SendButton  px-2  text-white bg-cyan-500  h-10 " type="submit ">
                                Save
                            </button>
                        </div>
                </div>
                  </div>
    </div>
    </div>
    </>
    )
}

export default InviteallStudentparentview
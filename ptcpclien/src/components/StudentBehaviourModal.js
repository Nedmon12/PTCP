import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Skill from './Skill';
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import AddSkill from './AddSkill'
import { AuthContext } from '../context/AuthContext';
import InviteParentModal from './inviteParentModal'
function Student({setModalOn, student}) {
  const [skills, setSkills] = useState([]);
  const [inviteStudentParent, setInviteStudentParent]=useState([false]);
  const [negativeskills, setnegativeskills]= useState([]);
  const [ispostive, setpostive] = useState(true);
  const location = useLocation();
  const {user} = useContext(AuthContext);
  console.log(user.user._id)
  const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
  const handleCancelClick = () => {
    setModalOn(false)
}
console.log(student)
const postiveHandler = () => {
  if(ispostive==false)
  setpostive(true);
};
const negativeHandler = () => {
  if(ispostive==true)
  setpostive(false);
};  
const inviteHandler=()=>{
  setInviteStudentParent(true);

}
console.log(user.user._id)
useEffect(() => {
  const fetchSkills = async () => {
    const res = await axios.get("/api/class/fetchallskill/"+user.user._id);
    setSkills(res.data);
  };
  fetchSkills();
}, [user.user._id]);

useEffect(() => {
  const fetchSkills = async () => {
    const res = await axios.get("/api/class/fetchnegativeskill/"+user.user._id);
    setnegativeskills(res.data);
  };
  fetchSkills();
}, [user.user._id]);
console.log(negativeskills)


return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[42vw] w-[75vw] opacity-100' >
            <div className='flex flex-row'>
                <div className='basis-1/4 flex flex-col border-r border-slate-200 justify-between' >
                      <div className=' h-[38vw] border-b border-slate-200 flex flex-col'>
                      <div className='w-10 h-10 ml-64 mt-40 firstone bg-green-500 text-white rounded-full border border-gray-300' >
                          <span className='font-bold p-3' >55</span>
                      </div>
                      <img className='pokeman w-44 h-44 mx-24 '  src={PFavater + imageurl} alt="k" />
                      <span class="block tracking-wide text-gray-700 text-xl font-bold px-40 py-4 mb-44 ">{student.firstname}</span>

                      </div>
                      <div className='h-[4vw] '>
                          <div className='pt-3 pl-5 flex flex-row' >
                          <div className='pl-10 pt-2 text-cyan-500' >
                              <AddCircleIcon fill="currentColor align-center"/>
                          </div>
                            <button onClick={inviteHandler} >
                              <span className="shareOptionText text-cyan-500 text-lg pl-2 pt-2">Invite {student.firstname}'s Parent</span>
                              </button>
                              {inviteStudentParent==true && <InviteParentModal setInviteStudentParent={setInviteStudentParent} student={student}/>}
                      </div>
                    </div>    
                
              </div>
              
              <div className='basis-3/4 flex flex-col '>
                  <div className='h-[6vw]  border-b border-slate-200 flex flex-col  justify-between'>
                       <div className='flex flex-row h-12 justify-between' >
                            <span class="block tracking-wide text-gray-500 text-lg font-bold pl-4 py-4 ">Give Feedback to {student.firstname}</span>
                            <button className='pr-2 py-4' onClick={handleCancelClick} >
                                <CloseIcon fill="currentcolor"/>
                            </button>
                        </div>
                        <div className='skillnavbar flex flex-row' >
                      
                        <button onClick={postiveHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Postive
                          </button>
                        <button onClick={negativeHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive == false ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            Needs work
                          </button>
                            
                        </div>
                  </div> 
                  <div className=' h-[36vw] overflow-auto '>
                    <div className='px-16 py-6 grid grid-cols-4 gap-3' >
                  {ispostive==true ?  skills.map((s)=>(
                      <Skill key={s._id} skill={s} ispostive={true} studentid={student._id}/>
                      )        
                       ):
                    negativeskills.map((s)=>(
                      <Skill key={s._id} skill={s} ispostive={false}/>
                      ))        
                  }
                    </div>
                  </div>
              </div>
            </div>      
          </div>
       </div>
    </div>
    )
}

export default Student
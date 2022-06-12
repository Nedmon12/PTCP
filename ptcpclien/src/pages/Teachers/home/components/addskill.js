import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import Skill from '../../../../components/Skill';
import AddSkill from '../../../../components/AddSkill'
import { AuthContext } from '../../../../context/AuthContext';

export default function Addskill({}) {
    const {user} = useContext(AuthContext);
    const [negativeskills, setnegativeskills]= useState([]);
    const [skills, setSkills] = useState([]);
    const [ispostive, setpostive] = useState(true);
    const [students, setStudents] = useState([]);

    console.log(user.user._id)
    useEffect(() => {
        const fetchStudent = async () => {
          const res = await axios.get("/api/studentManagmentRoutes/fetchstudent/"+ user.user._id);
          setStudents(res.data);
        };
        fetchStudent();
    }, [user.user._id]);

    const postiveHandler = () => {
        if(ispostive==false)
        setpostive(true);
      };
      const negativeHandler = () => {
        if(ispostive==true)
        setpostive(false);
      };  
      
      useEffect(() => {
        const fetchSkills = async () => {
          const res = await axios.get("/api/class/fetchallskill/" + user.user._id);
          setSkills(res.data);
        };
        fetchSkills();
      }, [user.user._id]);
      
      useEffect(() => {
        const fetchSkills = async () => {
          const res = await axios.get("/api/class/fetchnegativeskill/" + user.user._id);
          setnegativeskills(res.data);
        };
        fetchSkills();
      }, [user.user._id]);
      console.log(skills)
    return (
    <div>
            <div className='skillnavbar flex flex-row border-b border-slate-100 shadow-md' >
                      
                      <button onClick={postiveHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                          Postive
                        </button>
                      <button onClick={negativeHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${ispostive == false ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                          Needs work
                        </button>
                          
                      </div>
            <div className=' h-[36vw] overflow-auto '>
                    <div className='px-16 py-6 grid grid-cols-5 gap-2' >
                  {ispostive==true ?  skills.map((s)=>(
                      <Skill key={s._id} skill={s} ispostive={true}/>
                      )        
                       ):
                    negativeskills.map((s)=>(
                      <Skill key={s._id} skill={s} ispostive={false}/>
                      ))     
                  }
                      <AddSkill/>
                    </div>     
                </div>        
          </div>
  )
}

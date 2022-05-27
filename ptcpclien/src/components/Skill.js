import React,{useContext,useState} from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';
export default function Skill({skill, ispostive,studentid}) {
  const user = useContext(AuthContext);
  const [currentpoint, setCurrentPoint] = useState(skill.SkillPoint);
  const handleClick = async (e) => {
    e.preventDefault();
    setCurrentPoint(skill.SkillPoint)
    console.log(currentpoint)
    const point = {
        teacherid: user.user._id,
        studentid: studentid,
        behaviourpoint: currentpoint,
      };
      try {
        await axios.post("/api/studentManagmentRoutes/addbehavior", point);
       
      } catch (err) {
        console.log(err);
      }
    
  };


  
  console.log(ispostive)
  return (
    <button onClick={handleClick} className='border border-slate-100 w-32 h-32  rounded-lg bg-slate-100 justify-items-center' >
        <div className={`w-8 h-8  ml-20 -mt-5 ${ispostive ==true ?  "bg-green-500 text-white rounded-full border-2 border-white":"bg-red-500 text-white rounded-full border-2 border-white"} `} >
            <span className='font-bold' >{skill.SkillPoint}</span>
        </div>
        <div className='w-12 h-12 p-2 ml-10 -mt-5 firstone text-cyan-500 rounded-full border-2 border-cyan-500' >
          <MenuBookIcon fill='currentcolor'/>
        </div>
 
    <span className='' >{skill.SkillName}</span>
    </button>
  )
}

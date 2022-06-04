import React, {useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import AddSkillModal from './addskillmodal'
export default function Skill() {
  const [addskillmodal, setaddskillmodal]= useState(false);
  const modalHandler = () => {
    setaddskillmodal(true);
  }
  return (
    <div>
    <button onClick={modalHandler} className='border border-slate-100 w-32 h-32  rounded-lg bg-slate-100 justify-items-center' >
    <div></div>
    <div className='w-12 h-12 p-2 ml-10 firstone text-cyan-500 rounded-full border-2 border-cyan-500' >
      <EditIcon fill='currentcolor' />
    </div>
    <span className='py-2' >Add Skill</span>
    </button>
      {addskillmodal==true && <AddSkillModal setaddskillmodal={setaddskillmodal}  />}
    </div>
  )
}

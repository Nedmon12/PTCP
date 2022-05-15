import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddStudentModal from './addStudentModal';
export default function Addstudent() {  
  const [modalOn, setModalOn] = useState(false);
  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div className=''>
    <div className='studentContainer w-25 h-20 border text-cyan-500 border-gray-100 rounded-lg bg-white flex flex-col'>
       <button onClick={clicked} >
        <div className='px-10 pt-3' ><AddCircleIcon fill="currentColor align-center"/></div>
        <span className='StudentName font-mono text-sm text-cyan-500 px-2 pt-1'>Add Students</span>
        </button>
    </div>
    {modalOn && <AddStudentModal setModalOn={setModalOn} />}   
    
</div>
    )
}

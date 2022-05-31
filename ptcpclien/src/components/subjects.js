import React,{useContext,useState} from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import axios from 'axios'
import ExamResultModal from './ExamResultModel';
import { AuthContext } from '../context/AuthContext';
export default function Subject({subject,student}) {
  const user = useContext(AuthContext);
  const [ExamResulttModal, setExamResultModal]=useState([false]);
  const ClickHandler=()=>{
    setExamResultModal(true);
  }
  return (
    <>
    <button onClick={ClickHandler}  className='border border-slate-100 w-full h-32  rounded-lg bg-slate-100 justify-items-center hover:bg-slate-200 hover:h-36' >
        <div className='w-14 h-14 p-3 ml-20 mt-2 firstone text-cyan-500 rounded-full border-2 border-cyan-500' >
          <MenuBookIcon fill='currentcolor'/>
        </div>
    <span className='text-xl' >{subject.SubjectName}</span>
    </button>
    {ExamResulttModal==true && < ExamResultModal subject={subject} setExamResultModal={setExamResultModal} student={student}/>}

    </>
  )
}

import React,{useContext,useState} from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import axios from 'axios'
import EditSubjectModal from './editSubjectmodal';
import TestResultModal from './TestResultModel';
import AssignmentResultModal from './AssignmentResultModel';
import OtherResultModal from './OtherResultModel';
import ResultStatus from './ResultStatus';
import { AuthContext } from '../context/AuthContext';
export default function Subject({subject,student,ispostive}) {
  const {user} = useContext(AuthContext);
  const [editSubjectmodal, seteditSubjectmodal]=useState([false]);
  const ClickHandler=()=>{
    seteditSubjectmodal(true);
  }
  return (
    <>
    <button onClick={ClickHandler}  className='border border-slate-100 w-full h-32  rounded-lg bg-slate-100 justify-items-center hover:bg-slate-200 hover:h-36' >
        <div className='w-14 h-14 p-3 ml-20 mt-2 firstone text-cyan-500 rounded-full border-2 border-cyan-500' >
          <MenuBookIcon fill='currentcolor'/>
        </div>
    <span className='text-xl' >{subject.SubjectName}</span>
    </button>
    { editSubjectmodal==true && <EditSubjectModal seteditSubjectmodal={seteditSubjectmodal} subject={subject}/>}
    </>
  )
}

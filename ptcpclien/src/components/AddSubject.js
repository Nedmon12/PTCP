import React,{useContext,useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'
import AddSubjectmodal from './addSubjectmodal';
import TestResultModal from './TestResultModel';
import AssignmentResultModal from './AssignmentResultModel';
import OtherResultModal from './OtherResultModel';
import ResultStatus from './ResultStatus';
import { AuthContext } from '../context/AuthContext';
export default function AddSubject() {
  const {user} = useContext(AuthContext);
  const [addSubjectmodal, setaddSubjectmodal]=useState([false]);
  const ClickHandler=()=>{
    setaddSubjectmodal(true);
  }
  return (
    <>
    <button onClick={ClickHandler}  className='border border-slate-100 w-full h-32  rounded-lg bg-slate-100 justify-items-center hover:bg-slate-200 hover:h-36' >
        <div className='w-14 h-14 p-3 ml-20 mt-2 text-cyan-500 rounded-full border-2 border-cyan-500' >
      <EditIcon fill='currentcolor' />
    </div>

<span className='text-xl ' >Add Subject</span>
</button>
{ addSubjectmodal==true && <AddSubjectmodal setaddSubjectmodal={setaddSubjectmodal} />}
</>
  )
}

import React ,{useState, useContext, useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Subject from './subjects';
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';

export default function ExamResultModel({student,setExamResultModal, subject}) {
    const handleCancelClick = () => {
        setExamResultModal(false)    
    }
    const outoff =useRef()
    const {user} =useContext(AuthContext);
    const mainresultt=useRef()
    const reasonn=useRef()
    console.log(user._id);
    const handleClick = async (e) => {
      e.preventDefault();
      console.log(outoff.current.value)
      console.log(reasonn.current.value)
      console.log(mainresultt.current.value)

        const result = {
          teacherid: user.user._id,
          studentid: student._id,
          subjectid: subject._id,
          subjectname: subject.SubjectName,
          outof: outoff.current.value,

          mainresult: mainresultt.current.value,
          reason: reasonn.current.value
        };
        
        try {
          await axios.post("api/studentManagmentRoutes/addresult", result);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      
    };
    const [outof, setoutof] = useState(40);
    console.log(student.firstname)
    return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[26vw] w-[32vw] opacity-100' >
        <div className='basis-1/6 flex flex-row h-10 justify-between border-b-2 text-white border-slate-100 rounded-t-xl bg-cyan-500 ' >  
            <span class="block tracking-wide boreder-2 border-slate-100 text-white text-lg font-medium pl-4 py-4 hover:text-bs ">{student.firstname} {student.lastname}'s {subject.SubjectName} Other result</span>
            <button className='pr-2 py-4' onClick={handleCancelClick} >
               <CloseIcon fill="currentcolor"/>
            </button> 
        </div>
        <div className='basis-5/6' >
            <div className='flex flex-row border-b-2 border-slate-100' >
                        
            </div>
            <div className='mt-10' >
            <div className='basis-5/6' >
            <div className='mt-6  flex flex-row px-4' >
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-marknumber">
               Reason
            </label>
            <input required ref={reasonn} id="marknumber" type="text" placeholder="Handing writting"className=" rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 w-[24vw] border  h-10"/>
            </div>
            <div className='mt-6  flex flex-row px-4'>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-marknumber">
                Out of
            </label>
            <input required ref={outoff} id="marknumber" type="number" placeholder="5"className=" rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 w-[24vw] border  h-10"/>
            </div>
            <div className='mt-6 flex flex-row px-4'>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-marknumber">
                Result
            </label>
            <input required ref={mainresultt}  id="number" type="number" placeholder="4"className=" rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 w-[24vw] border  h-10"/>
             </div>   
                <button onClick={handleClick} className=" mt-4 ml-96 rounded-sm w-[6vw] SendButton p-2 text-white bg-cyan-500  h-10 " type="submit ">
                    save
                </button>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
  )
}

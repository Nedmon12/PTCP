import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Subject from './subjects';

export default function ExamResultModel({student,setExamResultModal, subject}) {
    const handleCancelClick = () => {
        setExamResultModal(false)
    
    }
    console.log(student.firstname)
    return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[26vw] w-[32vw] opacity-100' >
        <div className='basis-1/6 flex flex-row h-10 justify-between border-b-2 border-slate-100 bg-slate-100 rounded-2xl' >  
            <span class="block tracking-wide text-gray-700 text-bs font-medium pl-4 py-4 ">{student.firstname} {student.lastname}'s {subject.SubjectName} Final Exam result</span>
            <button className='pr-2 py-4' onClick={handleCancelClick} >
               <CloseIcon fill="currentcolor"/>
            </button> 
        </div>
        <div className='basis-5/6' >

        </div>
        </div>
        </div>
        </div>
  )
}

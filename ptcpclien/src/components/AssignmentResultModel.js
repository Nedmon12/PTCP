import React ,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Subject from './subjects';

export default function ExamResultModel({student,setExamResultModal, subject}) {
    const handleCancelClick = () => {
        setExamResultModal(false)    
    }
    const [outof, setoutof] = useState(40);
    console.log(student.firstname)
    return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[26vw] w-[32vw] opacity-100' >
        <div className='basis-1/6 flex flex-row h-10 justify-between border-b-2 text-white border-slate-100 rounded-t-xl bg-cyan-500 ' >  
            <span class="block tracking-wide boreder-2 border-slate-100 text-white text-lg font-medium pl-4 py-4 hover:text-bs ">{student.firstname} {student.lastname}'s {subject.SubjectName} Assignment result</span>
            <button className='pr-2 py-4' onClick={handleCancelClick} >
               <CloseIcon fill="currentcolor"/>
            </button> 
        </div>
        <div className='basis-5/6' >
            <div className='mt-6  flex flex-row px-4' >
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-marknumber">
                Out of
            </label>
            <input required  id="marknumber" type="number" placeholder="Out of"className=" rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 w-[24vw] border  h-10"/>
                  
            </div>
            <div className='mt-6 flex flex-row px-4' >
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-marknumber">
                Result
            </label>
            <input required  id="number" type="number" placeholder="Result"className=" rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 w-[24vw] border  h-10"/>
             </div>   
                <button className=" mt-4 ml-96 rounded-sm w-[6vw] SendButton p-2 text-white bg-cyan-500  h-10 " type="submit ">
                    save
                </button>
            </div>

        
        </div>
        </div>
        </div>
  )
}

import React ,{useState, useContext, useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Subject from './subjects';
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';

export default function TestResultModel({student,setExamResultModal, subject}) {
    const handleCancelClick = () => {
        setExamResultModal(false)    
    }
    console.log(subject.SubjectName)
    const [outoff, setoutoff] = useState(15);
    const {user} =useContext(AuthContext);
    const mainresultt= useRef()
    const handleClick = async (e) => {
      e.preventDefault();
        const result = {
          teacherid: user.user._id,
          studentid: student._id,
          subjectid: subject._id,
          subjectname: subject.SubjectName,
          reason: "Class Exam",
          outof: outoff,
          mainresult: mainresultt.current.value
        };
        console.log(result)
        try {
          await axios.post("api/studentManagmentRoutes/addresult", result);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
    }
    const fiveHandler = () => {
        if(outoff!==5)
        setoutoff(5);
      };
      const tenHandler = () => {
        if(outoff!==10)
        setoutoff(10);
      };  
      const fifteenHandler = () => {
        if(outoff!==15)
        setoutoff(15);
      };  
      const twentyHandler = () => {
        if(outoff!==20)
        setoutoff(20);
      };
      const twentyfiveHandler = () => {
        if(outoff!==25)
        setoutoff(25);
      }
    console.log(student.firstname)
    return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[26vw] w-[32vw] opacity-100' >
        <div className='basis-1/6 flex flex-row h-10 justify-between border-b-2 text-white border-slate-100 rounded-t-xl bg-cyan-500 ' >  
            <span class="block tracking-wide boreder-2 border-slate-100 text-white text-lg font-medium pl-4 py-4 hover:text-bs ">{student.firstname} {student.lastname}'s {subject.SubjectName} Test result</span>
            <button className='pr-2 py-4' onClick={handleCancelClick} >
               <CloseIcon fill="currentcolor"/>
            </button> 
        </div>
        <div className='basis-5/6' >
            <div className='flex flex-row border-b-2 border-slate-100' >
                          <button onClick={fiveHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${outoff == 5 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            5
                          </button>
                          <button onClick={tenHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${outoff == 10 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            10
                          </button>
                          <button onClick={fifteenHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${outoff == 15 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            15
                          </button>
                          <button onClick={twentyHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${outoff == 20 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            20
                          </button>
                          <button onClick={twentyfiveHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${outoff == 25 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            25
                          </button>
            </div>
            <div className='mt-10' >
                <input required ref={mainresultt} id="number" type="number" placeholder="Result"className=" rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 w-[24vw] border  h-10"/>
                <button onClick={handleClick} className=" rounded-sm w-[6vw] SendButton p-2 text-white bg-cyan-500  h-10 " type="submit ">
                    save
                </button>
            </div>
        </div>
        </div>
        </div>
        </div>
  )
}

import React ,{useState, useContext, useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Subject from './subjects';
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';
export default function ExamResultModel({student,setExamResultModal, subject}) {
    const handleCancelClick = () => {
        setExamResultModal(false)    
    }
    
    const [outoff, setoutoff] = useState(40);
    const {user} =useContext(AuthContext);
    const mainresultt= useRef()
    console.log(user._id);
    const handleClick = async (e) => {
      e.preventDefault();
        const result = {
          teacherid: user._id,
          studentid: student._id,
          subjectid: subject._id,
          outof: outoff,
          mainresult: mainresultt.current.value
        };
        console.log(result)
        try {
          await axios.post("api/class/addresult", result);
          window.location.reload();

        } catch (err) {
          console.log(err);
        }
      
    };
    const thirtyHandler = () => {
        if(outoff!==30)
        setoutoff(30);
      };
      const thirtyfiveHandler = () => {
        if(outoff!==35)
        setoutoff(35);
      };  
      const fortyHandler = () => {
        if(outoff!==40)
        setoutoff(40);
      };  
      const fortyfiveHandler = () => {
        if(outoff!==45)
        setoutoff(45);
      };
      const fiftyHandler = () => {
        if(outoff!==50)
        setoutoff(50);
      }
    return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[26vw] w-[32vw] opacity-100' >
        <div className='basis-1/6 flex flex-row h-10 justify-between border-b-2 text-white border-slate-100 rounded-t-xl bg-cyan-500 ' >  
            <span class="block tracking-wide boreder-2 border-slate-100 text-white text-lg font-medium pl-4 py-4 hover:text-bs ">{student.firstname} {student.lastname}'s {subject.SubjectName} Final Exam result</span>
            <button className='pr-2 py-4' onClick={handleCancelClick} >
               <CloseIcon fill="currentcolor"/>
            </button> 
        </div>
        <div className='basis-5/6' >
            <div className='flex flex-row border-b-2 border-slate-100' >
                          <button onClick={thirtyHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${outoff == 30 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            30
                          </button>
                          <button onClick={thirtyfiveHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${outoff == 35 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            35
                          </button>
                          <button onClick={fortyHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${outoff == 40 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            40
                          </button>
                          <button onClick={fortyfiveHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${outoff == 45 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            45
                          </button>
                          <button onClick={fiftyHandler} type="button" class={`px-10 py-2 inline-flex items-center p-4  text-gray-700 text-base rounded-lg ${outoff == 50 ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-500  hover:bg-gray-300 "}`}>   
                            50
                          </button>
            </div>
            <div className='mt-10' >
                <input ref={mainresultt}  required  id="number" type="number" placeholder="Result"className=" rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 w-[24vw] border  h-10"/>
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

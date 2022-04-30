import React from 'react'
import Topbar from "../../../components/TeacherTopbar"
import NavbarForTeachers from "../../../components/NavbarforTeacher"
import MessageContainer  from "../../../components/MessageContainer"
import Footer from "../../../components/Footer"
export default function  () {
  return (
    <div className='h-screen  bg-slate-50	'>
      <div>
        <NavbarForTeachers/>
      </div>
      <div className='maincontainer h-5/6 min-w-full'>
        <MessageContainer/>
      </div>
      <div className='mt-2'>
        <Footer/>
      </div>
       
        
    </div>
  )
}

import React from 'react'
import Footerlog from '../../../components/Footer'
import NavbarForTeachers from "../../../components/NavbarforTeacher"
import ClassroomNavbar from '../../../components/ClassroomNavbar'
import StudentsBehavior from '../../../components/studentsBehavior'
import Sidebar from '../../../components/Sidebar'

export default function classroom() {
  return (
    <div className='h-screen'>
      <Sidebar/>
        <div className='pb-1'>
            <NavbarForTeachers/>
        </div>
        <div className='maincontainer h-5/6 min-w-full'>
            {/*navbar  of operation*/}
            <ClassroomNavbar/>
            {/*list  of students*/}
            <StudentsBehavior/>

            
        </div>
        <div  className="pt-3">
        <Footerlog/>
        </div>
    </div>
    
  )
}

import React from 'react'
import Footerlog from '../../../components/Footer'
import NavbarForTeachers from "../../../components/NavbarforTeacher"
import ClassroomNavbar from '../../../components/ClassroomNavbar'
import Students from '../../../components/students'
import Sidebar from '../../../components/Sidebar'
import StudentsAttendance from '../../../components/studentsAttendance'
export default function classroom() {
  return (
    <div className='h-screen'>
      <div>
        <Sidebar/>
      </div>        
      <div className='pb-1'>
            <NavbarForTeachers/>
      </div>
      <div className='flex flex-col justify-between h-[44vw]'  >
      <div className='maincontainer min-w-full h-full '>
            {/*navbar  of operation*/}
            <ClassroomNavbar/>
            {/*list  of students*/}
          <StudentsAttendance/>
            
      </div>
      <div  className="pt-3">
        <Footerlog/>
      </div>
      </div>
    </div>
    
  )
}

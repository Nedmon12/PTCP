import React from 'react'
import Footerlog from '../../../components/Footer'
import NavbarForTeachers from "../../../components/NavbarforTeacher"
import ClassroomNavbar from '../../../components/ClassroomNavbar'
import Students from '../../../components/students'
import Topbarr from '../../../components/Topbar'

export default function classroom() {
  return (
    <div>   
       
    <div className='h-screen'>
        <div className='pb-1'>
            <NavbarForTeachers/>
        </div>
        <div className='maincontainer h-5/6 min-w-full'>
            {/*navbar  of operation*/}
            <ClassroomNavbar/>
            {/*list  of students*/}
           
            <Students/>
            
        </div>
        <div  className="pt-3">
        
        </div>
    </div>
    </div>
    
  )
}

import React from 'react'
import Student from './Student'
import Addstudent from './Addstudent'
import AllStudents from './AllStudents'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
export default function Students() {


  const user = useContext(AuthContext);
  const getStudent = async (e) =>  {
    e.preventDefault();
    try {
      const Colstudents = await axios.get("api/studentManagmentRoutes/fetchstudent/" + user._id);

      console.log(Colstudents);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='StudentContainer p-4 bg-slate-50 min-h-full'>
        <div class="grid grid-cols-12 gap-4">
            <AllStudents/>
            
            <Student/>
            <Addstudent/>
            
            
            
            
        </div>
    </div>
  )
}

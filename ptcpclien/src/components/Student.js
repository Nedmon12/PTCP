import React from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function Abel() {
  const user = useContext(AuthContext);
  async function getStudent() {
    try {
      const Student = await axios.get('api/studentManagmentRoutes/fetchstudent', {
        params: {
          teacherid: user._id
        }
      });
      console.log(Student);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className='studentContainer w-25 h-20 border border-gray-100 rounded-lg bg-white'>
        <img />
        <span className='StudentName font-mono text-gray-600'>Abel</span>
    </div>
  )
}

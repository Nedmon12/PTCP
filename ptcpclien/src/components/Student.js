import React from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Student({student}) {
  const user = useContext(AuthContext);
  console.log(student)

  return (
    <div className='studentContainer w-25 h-20 border border-gray-100 rounded-lg bg-white'>
        <img />
        <span className='StudentName font-mono text-gray-600'>{student.firstname}</span>
    </div>
    
    )
}

export default Student
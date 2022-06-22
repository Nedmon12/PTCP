import React from 'react'
import { useState } from 'react';
import Student from '../StudentStatus';
import Dateview from './date'
export default function Attendanceview({student}) {
  console.log(student)

    const d = new Date();
    let tday = d.getDate()
    let tday1 = d.getDate()-1
    let tday2 = d.getDate()-2
    let tday3 = d.getDate()-3
    let tday4 = d.getDate()-4
    let tday5 = d.getDate()-5
    let tday6 = d.getDate()-6
    let tday7 = d.getDate()-7


    return (
    <div>
        <span>Attendance of {student.firstname} {student.lastname} </span>
        <div className='grid grid-cols-4 gap-2 py-3 md:grid-cols-8 ' >
           <Dateview student={student} tday={tday7}/>
           <Dateview student={student} tday={tday6}  />
           <Dateview student={student} tday={tday5}/>
           <Dateview student={student} tday={tday4} />
           <Dateview student={student} tday={tday3}/>
           <Dateview student={student} tday={tday2}/>
           <Dateview student={student} tday={tday1}/>
           <Dateview student={student} tday={tday}/>

        </div>
    </div>
  )
}

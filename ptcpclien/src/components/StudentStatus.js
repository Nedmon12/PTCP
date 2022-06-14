import React, {useState} from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import EditStudentModal from './editstudentModal'
function Student({student, counter}) {
  const user = useContext(AuthContext);
  const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  console.log(counter);
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
  const [modal,setmodal]= useState(false)
  const edithandler = () => {
    setmodal(true)
}
  return (
    <button className='bg-white border-b border-slate-100 text-white w-full h-16 flex flex-row py-2' >
        <img className='pokeman w-10 h-10 mx-4 '  src={PFavater + imageurl} alt="k" />
        <div className='w-26 h-16 rounded-lg'>
              <span className='StudentName  text-gray-700 px-1 py-4 '>{student.firstname}</span>
              <span className='StudentName  text-gray-700 px-1 py-4 '>{student.lastname}</span>
          </div>
     </button>
  
    )
}

export default Student
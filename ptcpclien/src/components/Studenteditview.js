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
    <>
    <button onClick={edithandler} >
    <div className={`studentContainer w-[125vh] h-16 mx-10 flex flex-row ${counter%2==0 ? 'bg-slate-100 border border-slate-50':'bg-white'} `}>
        <img className='pokeman w-10 h-10 mx-4 '  src={PFavater + imageurl} alt="k" />
        <div className='w-26 h-16 rounded-lg'>
              <span className='StudentName font-sans font-medium text-gray-600 p-2 py-2 '>{student.firstname}</span>
              <span className='StudentName font-sans font-medium text-gray-600 p-2 py-2 '>{student.lastname}</span>
        </div>
    </div>
    </button>
    {modal && <EditStudentModal setModal={setmodal} student={student}/>} 

    </>
    )
}

export default Student
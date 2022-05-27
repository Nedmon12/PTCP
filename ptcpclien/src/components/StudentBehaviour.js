import React, { useState } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import StudentBehaviourModal from './StudentBehaviourModal'
function Student({student}) {
  const [modalOn, setModalOn] = useState(false);
 // const [studentspec, setStudentspec] = useState([]);
 
  const user = useContext(AuthContext);
  const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
  const clicked = () => {
    setModalOn(true)
   // setStudentspec(student);
    
  }
  //console.log(studentspec)


  return (

    <div>
    <button onClick={clicked} className='studentContainer w-26 h-26 '>
            <img className='pokeman w-16 h-16 mx-4'  src={PFavater + imageurl} alt="k" />
      <div className='w-26 h-16 border border-gray-100 rounded-lg bg-white'  >
      <span className='StudentName font-mono text-gray-600 px-4 '>{student.firstname}</span>
      <div className="w-8 h-8  ml-20 -mt-5 bg-green-500 text-white rounded-full border-2 border-white" >
            <span className='font-bold' >{student.behaviourpoint}</span>
        </div>
      </div>
  </button>
        {modalOn && <StudentBehaviourModal setModalOn={setModalOn} student={student}/>} 
        </div>
    )
}
export default Student
import React from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Student({student}) {
  const {user} = useContext(AuthContext);
  const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  console.log(imageurl);
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;

  return (
    <div className='studentContainer w-26 h-26 shadow-lg '>
      
        <img className='pokeman w-16 h-16 mx-4 shadow-md '  src={PFavater + imageurl} alt="k" />
        <div className='w-26 h-16 border border-gray-100 rounded-lg bg-white'  >
        <span className='StudentName font-mono text-gray-600 px-4 '>{student.firstname}</span>
        </div>
    </div>
    
    )
}

export default Student
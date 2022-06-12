import React, {useState, useRef} from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import EditStudentModal from './editstudentModal'
function Student({student, counter}) {
  const email= useRef()

  const {user} = useContext(AuthContext);
  const id=student._id;
  const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  console.log(counter);
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
  const [modal,setmodal]= useState(false)

  
console.log(user)
console.log(student);

const handleClick = async (e) => {
e.preventDefault();
  const inviteparent = {
    teacherid: user._id,
    studentid: student._id,
    usertype: "parent",
    email: email.current.value,
  };
  try {
    await axios.post("api/auth/inviteuser", inviteparent);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }

};

  return (
    <>
    <button>
    <div className={`studentContainer w-[125vh] h-16  mx-10 flex flex-row ${counter%2==0 ? 'bg-slate-100 border border-slate-50':'bg-white'} `}>
        <img className='pokeman w-10 h-10 mx-4 '  src={PFavater + imageurl} alt="k" />
        <div className='w-full h-16 rounded-lg flex flex-row justify-between'>
            <div className='' >
                  <span className='StudentName font-sans font-medium text-gray-600 p-2 py-2 '>{student.firstname}</span>
                  <span className='StudentName font-sans font-medium text-gray-600 p-2 py-2 '>{student.lastname}</span>
              </div>
              <div className='p-2' >  
                       <input required ref={email} id="email" type="email" placeholder="Parent Email"className=" rounded-sm ml-4 PostInput pl-3 placeholder-cyan-500 w-[24vw] border  h-10"/>
                       <button onClick={handleClick} className=" rounded-sm w-[6vw] SendButton p-2 text-white bg-cyan-500  h-10 " type="submit ">
                            Inivte
                        </button>
              </div>
        </div>
    </div>
    </button>
    </>
    )
}

export default Student
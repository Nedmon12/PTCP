import React from 'react'
import { useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footerlog from '../../components/Footer'
import { Password } from '@mui/icons-material'
import axios from "axios";
import { useNavigate } from "react-router";

export default function Parentslogin() {
  const firstname=useRef();
  const lastname=useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmpassword.current.value !== password.current.value) {
      confirmpassword.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("api/auth/register", user);
        navigate("/tlogin");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className='bg-slate-100 min-h-screen min-w-screen flex flex-col'>
    <div className="container mx-auto max-w-xl min-h-fit pt-8" >
        <div className="flex justify-center">
          <img src="assets/logo2.png" className='w-32 h-28 ' alt="logo2"/>
        </div>
        <div>
          <h1 className="text-3xl font-bold flex justify-center pt-5 text-cyan-500 ">   
              Beare PTC PlatForm
            </h1> 
        </div>
        <div className='p-7'> 
          <h1 className="flex justify-center text-xl  ">
              Teachers Login
          </h1>
    </div>


    <div className='container max-w-xl min-h-fit text-white mb-24'>
          <form onSubmit={handleClick} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                  First Name
                </label>
                <input required ref={firstname} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="name" placeholder="Enter your name"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                  Last Name
                </label>
                <input required ref={lastname}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="name" placeholder="Enter your last name"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                  User Name
                </label>
                <input required ref={username} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="name" placeholder="Enter your user name"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input required ref={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input ref={password} minLength="6" required  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                <p className="text-red-500 text-xs italic"></p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Confirm Password
                </label>
                <input minLength="6" ref={confirmpassword} required  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" placeholder="******************"/>
                <p className="text-red-500 text-xs italic"></p>
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="login_button bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Register
                  </button>
                <a className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800" href="#">
                  Already have an Account?
                </a>
              </div>
        </form>
      </div>
    </div>
    <div className='mt-6' >
       <Footerlog/>
    </div>
     </div>
  )
}

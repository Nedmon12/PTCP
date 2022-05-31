import React from 'react'
import Navbar from '../../components/Navbar'
import Footerlog from '../../components/Footer'
import CircularProgress from '@mui/material/CircularProgress';
import { useContext, useRef } from "react";
import { ploginCall }from "../../apicalls";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

export default function Parentslogin() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    ploginCall({email:email.current.value,password:password.current.value},
      dispatch);
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
                  Parents Login
              </h1>
        </div>


        <div className='container max-w-xl min-h-fit text-white mb-24'>
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleClick}>
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
                    <input minLength="6" required ref={password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                    <p className="text-red-500 text-xs italic"></p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button disabled={isFetching} type="submit" className="login_button bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    {isFetching ? "loading":"Log in"}
                     
                      </button>
                    <a className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800" href="#">
                      Forgot Password?
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

import React from 'react'
import Navbar from '../../components/navbar'
import Footerlog from '../../components/Footer'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Parentslogin() {
  const navigate = useNavigate();
  return (
          <div className='bg-slate-100	 min-w-screen'>
        <div className="container mx-auto max-w-xl min-h-fit pt-8" >
        <div className="flex justify-center">
           <img src="http://localhost:3000/logo2.png" alt="logo" width={120} height={120}/>
         </div>
         <div>
        <h1 className="text-3xl font-bold flex justify-center pt-5 text-cyan-500 ">   
           Beare PTC PlatForm
        </h1> 
        </div>
        <div className='p-7'> 
        <h1 className="flex justify-center">
            Schools Login
        </h1>
        </div>
        <div className='container max-w-xl min-h-fit text-white mb-24'>
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                      Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                      Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                  <div class="flex items-center justify-between">
                    <button class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Sign In
                    </button>
                    <button onClick={()=>{
                        navigate("/forgetpassword")
                    }} class="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800" href="#">
                      Forgot Password?
                    </button>
                  </div>
               </form>
        </div>
        </div>

         <Footerlog/>
         </div>

  )
}

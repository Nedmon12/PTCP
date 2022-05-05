import React from 'react'
import Navbar from '../../components/Navbar'
import Footerlog from '../../components/Footer'
export default function Parentslogin() {
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
                  Teachers Register 
              </h1>
        </div>


        <div className='container max-w-xl min-h-fit text-white mb-24'>
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                      FirstName
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                      Second Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                  </div>
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
                    <a class="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800" href="#">
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

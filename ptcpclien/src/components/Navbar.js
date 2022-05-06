<<<<<<< HEAD
import Dashboard from './admin/dashboard'
import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
=======
import { Link } from "react-router-dom";

>>>>>>> 3375a306f636cdee8ade03bf8aaafeef4558e6b7
const Navbar = () => {
    return (
        <nav className='class="bg-white px-4 py-5  border-blue-100 rounded border-solid border'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
              
                <a className='flex items-center'>
                    <span class="self-center text-3xl font-semibold whitespace-nowrap text-cyan-500">Beare</span>
                    <img src="" class="mr-5 h-10 sm:h-12" alt="beare Logo" />
                    
                 </a>
              
              <div class="flex md:order-2">
              
                 
                <button type="button" class="text-white bg-cyan-500 hover:bg-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 md:mr-2">Subscribe</button>
              
              <Link to="/login" >
                <button onClick="http://localhost:3000/landingpage/login" type="button" class="text-cyan-500 bg-cyan-200 hover:bg-cyan-400 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 md:mr-2">Login</button>
                </Link>
                <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                
                    
                    
                </div>
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
    
                   <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">For Schools</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">For parents</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/landingpage/pricing" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                        </li>     
                        <li> 
                            <Routes>
                            <Route exact path='/adminDashboard' element={<Dashboard/>} ></Route>
                            </Routes>
                            
                        </li>
                  </ul>
                </div>
            </div>
        </nav>
      );
}
//TODO hide link to admin for regular users {that means full implementation of auth}
export default Navbar;

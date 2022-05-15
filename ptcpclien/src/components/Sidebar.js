import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Sidebar() {
    const [isOpen, setIsOpen]= useState(false);
  
    return(
      <>
        {!isOpen? (<div className='top-0 left-0 fixed w-[6vw] border-l-1 border-blue-100 h-12 md:h-18 lg:24 mx-auto  bg-cyan-500' >
                    <div className='flex items-center  border-r border-cyan-600 ml-2'>
                                <button onClick={()=>setIsOpen(!isOpen)} type="button" class="inline-flex items-center p-3 text-sm text-white hover:bg-cyan-700">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                    <span className="text-">Menu  </span>
                                </button>
                            </div>
                </div>):
                    ( <div className='top-0 left-0 fixed w-[15vw] h-full border-2 border-slate-400 bg-cyan-500' >
                    <div className='flex flex-row items-center  border-r border-cyan-800 ml-6'>
                                <div>
                                    <span className='text-xl text-white' >School Name</span>
                                </div>
                                <button className='text-white hover:bg-cyan-500 w-8 h-8' onClick={()=>setIsOpen(!isOpen)} >
                                <KeyboardArrowLeftIcon  className='' />
                                </button>
                            </div>
                    <h2>this is side bar</h2>
                </div>)
    
    
   
        }
    </>
    )}

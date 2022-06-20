import React from 'react';
import { NavLink } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import { useLocation } from 'react-router-dom'
import StatusModal from './statusModal'
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Students from './students';

export default function ClassroomNavbar() {
    const location = useLocation();
    console.log(location.pathname);
    const [modal, setModal]= useState(false);
    const statusmodalon=()=>{
        setModal(true)
    }
    console.log(modal)
    return (
    <nav className='class="classroomnavbarcontainer -mt-1 borer-t border-slate-50 bg-white  max-h-14 md:h-18 lg:24 mx-auto shadow-lg'>
            <div className='container flex flex-wrap justify-between items-center mx-auto '>
                <div className='flex items-center  -ml-4 md:-ml-6 lg:-ml-8  border-r-2 border-cyan-600'>
                    
                </div>
              
                <div class=" text-gray-400">
                <NavLink to='/classroom' >
                <button type="button" class={`shadow-lg inline-flex items-center p-4 text-sm  text-cyan-500 ${location.pathname == "/classroom" ? "text-cyan-600 bg-cyan-100 underline underline-offset-8"  : "text-cyan-500  hover:bg-cyan-100 "}`}>   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block text-gray-600" >Students  </span>
                    </button>
                    </NavLink>
                 <NavLink to="/tattendance" >   
                <button type="button" class={`shadow-lg inline-flex items-center p-4 text-sm  text-cyan-500 ${location.pathname == "/tattendance" ? "text-cyan-600 bg-cyan-100 underline underline-offset-8"  : "text-cyan-500  hover:bg-cyan-100 "}`}>   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block text-gray-600" >Attendance  </span>
                    </button>
                    </NavLink> 
                   <NavLink to="/tbehaviour" >
                   <button type="button" class={`shadow-lg inline-flex items-center p-4 text-sm  text-cyan-500 ${location.pathname == "/tbehaviour" ? "text-cyan-600 bg-cyan-100 underline underline-offset-8"  : "text-cyan-500  hover:bg-cyan-100 "}`}>   
                        <AddIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                        <span className="text-sm pl-2 hidden sm:block text-gray-600" >Behaviour  </span>
                    </button>
                    </NavLink>
                    <NavLink to="/tresult" >
                    <button type="button" class={`shadow-lg inline-flex items-center p-4 text-sm  text-cyan-500 ${location.pathname == "/tresult" ? "text-cyan-600 bg-cyan-100 underline underline-offset-8"  : "text-cyan-500  hover:bg-cyan-100 "}`}>   
                        <ChatIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />        
                        <span className="text-sm pl-2 hidden sm:block text-gray-600">Result  </span>
                    </button>
                    </NavLink>
                    <NavLink to="/tvideo" >
                    <button type="button" class={`shadow-lg inline-flex items-center p-4 text-sm  text-cyan-500 ${location.pathname == "/tvideo" ? "text-cyan-600 bg-cyan-100 underline underline-offset-8"  : "text-cyan-500  hover:bg-cyan-100 "}`}>   
                      
                        <PersonAddIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />
                        <span className="text-sm pl-2 hidden sm:block text-gray-600">PT Video Confrence  </span>
                    </button>
                    </NavLink>
                   <NavLink to="/tstatus" >
                    <button onClick={statusmodalon} type="button" class={`shadow-lg inline-flex items-center p-4 text-sm  text-cyan-500 ${location.pathname == "/tstatus" ? "text-cyan-600 bg-cyan-100 underline underline-offset-8"  : "text-cyan-500  hover:bg-cyan-100 "}`}>   
                        <SettingsIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />
                        <span className="text-sm pl-2 hidden sm:block text-gray-600" > Status</span>
                
                    </button> 
                    </NavLink>
                    {modal==true && <StatusModal setModal={setModal}/>}

                
                    
                </div>
                <div class="flex md:order-2">
                      
                 
                </div>
            </div>
        </nav>
  )
}

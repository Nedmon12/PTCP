import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FlightClassIcon from '@mui/icons-material/FlightClass';
export default function ClassroomNavbar() {
  return (
    <nav className='class="classroomnavbarcontainer  bg-white border-b border-gray-100 max-h-14 md:h-18 lg:24 mx-auto'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <div className='flex items-center  -ml-4 md:-ml-6 lg:-ml-8  border-r-2 border-cyan-600'>
                    
                </div>
              
                <div class=" text-gray-400">
                <button type="button" class="inline-flex items-center p-4 text-sm  text-cyan-500 hover:bg-cyan-100">   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block text-gray-600" >Attendance  </span>
                    </button>
                    <button type="button" class="inline-flex items-center p-4 text-sm text-cyan-500 hover:bg-cyan-100">
                      
                        <AddIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                        <span className="text-sm pl-2 hidden sm:block text-gray-600" >Behaviour  </span>
                    </button>
                    <button type="button" class="inline-flex items-center p-4 text-sm  text-cyan-500 hover:bg-cyan-100">
                        <ChatIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />        
                        <span className="text-sm pl-2 hidden sm:block text-gray-600">Result  </span>
                    </button>
                    <button type="button" class="inline-flex items-center p-4 text-sm  text-cyan-500 hover:bg-cyan-100">
                      
                        <PersonAddIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />
                        <span className="text-sm pl-2 hidden sm:block text-gray-600">PT Video Confrence  </span>
                    </button>
                    <button type="button" class="inline-flex items-center p-4 text-sm  text-cyan-500 hover:bg-cyan-100">
                        <SettingsIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />
                        <span className="text-sm pl-2 hidden sm:block text-gray-600" > Status</span>
                    </button> 

                
                    
                </div>
                <div class="flex md:order-2">
                      
                 
                </div>
            </div>
        </nav>
  )
}

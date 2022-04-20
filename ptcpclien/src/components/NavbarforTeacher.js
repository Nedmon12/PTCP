import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FlightClassIcon from '@mui/icons-material/FlightClass';
const Navbar = () => {
    return (
        <nav className='class="teachersidenavbarcontainer  bg-cyan-500 border-blue-100 max-h-14 md:h-18 lg:24 mx-auto'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <div className='flex items-center  -ml-4 md:-ml-6 lg:-ml-8  border-r border-cyan-600'>
                    <button type="button" class="inline-flex items-center p-4 text-sm text-white hover:bg-cyan-600">
                      
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <span className="text-">Menu  </span>
                    </button>
                </div>
              
              <div class="">
                <button type="button" class="inline-flex items-center p-3 text-sm text-cyan-600 sm">
                      
                    <NotificationsIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />      
              
                </button>
              
               
                
                
                    
                    
                </div>
                <div class="flex md:order-2">
                   <button type="button" class="inline-flex items-center p-4 text-sm text-white hover:bg-cyan-600">   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block " >ClassRoom  </span>
                    </button>
                    <button type="button" class="inline-flex items-center p-4 text-sm text-white hover:bg-cyan-600">
                      
                        <AddIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                        <span className="text-sm pl-2 hidden sm:block " >Create  </span>
                    </button>
                    <button type="button" class="inline-flex items-center p-4 text-sm text-white hover:bg-cyan-600">
                        <ChatIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />        
                        <span className="text-sm pl-2 hidden sm:block">Message  </span>
                    </button>
                    <button type="button" class="inline-flex items-center p-4 text-sm text-white hover:bg-cyan-600">
                      
                        <PersonAddIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />
                        <span className="text-sm pl-2 hidden sm:block">Invite  </span>
                    </button>
                    <button type="button" class="inline-flex items-center p-4 text-sm text-white hover:bg-cyan-600">
                        <SettingsIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />
                        <span className="text-sm pl-2 hidden sm:block" > Setting</span>
                    </button>    
                 
                </div>
            </div>
        </nav>
      );
}
 
export default Navbar;

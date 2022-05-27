import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);
  

    return (
        <nav className='class="teachersidenavbarcontainer  bg-cyan-500 border-blue-100 h-14 md:h-18 lg:24 mx-auto'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                
              <div>
                <button type="button" class="inline-flex items-center p-3 text-sm text-cyan-600 sm">
                      
                    <NotificationsIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />      
                </button>
                </div>
                <div class="flex md:order-2  ">
                <NavLink to="/classroom">   
                <button type="button" class={`inline-flex items-center p-4 text-sm  text-white ${location.pathname == "/classroom" || location.pathname == "/tattendance" || location.pathname == "/tbehaviour" || location.pathname == "/tvideo" || location.pathname == "/tstatus" || location.pathname == "/tresult" ? "text-cyan-600 bg-cyan-200 underline underline-offset-8"  : "text-white hover:bg-cyan-600 "}`}>   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block " >ClassRoom  </span>
                    </button>
                </NavLink>
                <NavLink to="/thome">   
                <button type="button" class={`inline-flex items-center p-4 text-sm  text-white ${location.pathname == "/thome"  ? "text-cyan-600 bg-cyan-200 underline underline-offset-8"  : "text-white hover:bg-cyan-600 "}`}>   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block " >ClassStory  </span>
                    </button>
                </NavLink>
                    <button type="button" class="inline-flex items-center p-4 text-sm text-white hover:bg-cyan-600">
                      
                        <AddIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                        <span className="text-sm pl-2 hidden sm:block " >Create  </span>
                    </button>
                <NavLink to="/message">
                <button type="button" class={`inline-flex items-center p-4 text-sm  text-white ${location.pathname == "/message"  ? "text-cyan-600 bg-cyan-200 underline underline-offset-8"  : "text-white hover:bg-cyan-600 "}`}>   
                        <ChatIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />        
                        <span className="text-sm pl-2 hidden sm:block">Message  </span>
                    </button>
                </NavLink>
              
                    <button type="button" class="inline-flex items-center p-4 text-sm text-white hover:bg-cyan-600">
                      
                        <PersonAddIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />
                        <span className="text-sm pl-2 hidden sm:block">Invite  </span>
                    </button>
                <button type="button"  class="inline-flex items-center p-4 text-sm text-white hover:bg-cyan-600">
                        <SettingsIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />
                        <span className="text-sm pl-2 hidden sm:block" > Setting</span>
                </button>    
                
                </div>
                
            </div>
        </nav>
              );
            }
                         export default Navbar;
            
        

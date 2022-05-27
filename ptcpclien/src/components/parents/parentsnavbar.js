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
        <nav className='class="teachersidenavbarcontainer  bg-white border border-blue-100 h-14 md:h-18 lg:24 mx-auto'>
            <div className='container flex flex-row justify-center mx-auto'>
                <div class="">
                <NavLink to="/phome">   
                     <button type="button" class={`inline-flex items-center p-4 text-bs  text-gray-800 ${location.pathname == "/phome"  ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-black hover:bg-slate-100 "}`}>   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block " >ClassStory  </span>
                    </button>
                </NavLink>

                <NavLink to="/childstatus">   
                    <button type="button" class={`inline-flex items-center p-4 text-bs text-gray-800 ${location.pathname == "/childstatus" ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-black hover:bg-slate-100  "}`}>   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block " >Child's Status  </span>
                    </button>
                </NavLink>

                <NavLink to="/pmessage">
                    <button type="button" class={`inline-flex items-center p-4 text-bs text-gray-800 ${location.pathname == "/pmessage"  ? "text-cyan-500 bg-cyan-100 underline underline-offset-8"  : "text-gray-800 hover:bg-slate-100  "}`}>   
                        <ChatIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />        
                        <span className="text-sm pl-2 hidden sm:block">Message  </span>
                    </button>
                </NavLink>
                </div>
                
            </div>
        </nav>
              );
            }
                         export default Navbar;

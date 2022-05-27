import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    return (
        <nav className='class="teachersidenavbarcontainer  bg-cyan-700 border-blue-100 h-14 md:h-18 lg:24 mx-auto'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                
              <div>
                <button className="inline-flex items-center p-3 text-sm text-white sm">
                    Home
                </button>
              </div>
                <div class="flex md:order-2  ">
                <button type="button" class="inline-flex items-center p-3 text-sm text-white sm">
                      
                    <NotificationsIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />      
                </button>
                <button type="button" class="inline-flex items-center p-3 text-sm text-white sm">
                      
                    <QuestionMarkIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />      
                </button>
                <div className='flex flex-row text-white'>
                        <img className="postProfileImg h-7 w-7 mt-3 rounded-full border border-cyan-400 object-cover" 
                        src={PF +  "profile/noAvatar.png"}
                        alt=""/>
                        <div className='flex flex-col'>
                            <span className="postUsername text-sm ml-2 py-4 ">Girum Gizachew</span>
                        </div>
                        <div className='py-3'>
                        <ArrowDropDownIcon/>
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
              );
            }
                         export default Navbar;

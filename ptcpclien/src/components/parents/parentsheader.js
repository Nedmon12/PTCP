import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import React, { useState, Fragment, useEffect,useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {AuthContext} from '../../context/AuthContext'
import {Link ,useNavigate} from 'react-router-dom'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Navbar = () => {
    const {user}=useContext(AuthContext)
    const location = useLocation();
    const navigate =useNavigate();

    console.log(location.pathname);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <nav className='teachersidenavbarcontainer bg-cyan-700 border-blue-100 h-14 mx-auto flex flex-row justify-around '>
           <div  className='text-white px-4 py-4' >
                <span className='text-white' >Home</span>   
            </div>
            
            <button type="button" class="text-sm text-white sm ml-4">                    
                <NotificationsIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />      
            </button>
            <div className='ml-4' >
            <button type="button" class="text-sm text-white sm mr-4">
                <div className="w-6 h-6  bg-white text-cyan-700 rounded-full border border-white" >
                    <QuestionMarkIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />         
                </div>             
            </button>
            <Menu as="div" className="relative inline-block text-left">
                    <div>
                            <Menu.Button className="inline-flex justify-center w-full   rounded-md  shadow-sm px-3 py-3 bg-cyan-700 text-white text-sm font-medium hover:bg-cyan-600 ">
                            <img className="postProfileImg h-7 w-7 rounded-full border border-cyan-400 object-cover" 
                        src={
                            user.user.profilePicture
                              ? PF + user.profilePicture
                              : PF + "profile/noAvatar.png"
                          } alt=""/>       
                                      <span className="postUsername text-bs font-bold ml-3">{user.user.firstname} {user.user.lastname} </span>
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                    </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <NavLink to='/psetting'>
                        <button className='w-full' >
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Account Setting
                        </a>
                        </button>
                        </NavLink>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <button className='w-full' onClick={()=>
                            {localStorage.clear()
                            navigate('/plogin')
                            window.location.reload();
                            }}
                            >
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                            Logout
                            </a>
                        </button>
                    )}
                    </Menu.Item>
                </div>

                </Menu.Items>
            </Transition>
            </Menu> 
    
            </div>
        </nav>
    );
}
export default Navbar;

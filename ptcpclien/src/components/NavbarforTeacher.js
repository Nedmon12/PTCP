import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import React, { useState, Fragment, useEffect,useContext } from 'react'
import Createdropdown from './createdropdown'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { AuthContext } from '../context/AuthContext';
import { Logoutcall }from '../apicalls';
import {Link ,useNavigate} from 'react-router-dom'
import SettingModal from './settingmodal'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const Navbar = () => {
    const navigate =useNavigate();
    const [handler, sethandler] = useState(0)
    const editclassRoom = () => {
        if(handler!==1)
        sethandler(1);
      };
    const {dispatch} = useContext(AuthContext);

    const location = useLocation();

    console.log(location.pathname);
    


    return (
        <nav className='class="teachersidenavbarcontainer  bg-white border-blue-100 h-14 md:h-18 lg:24 mx-auto shadow-lg z-100'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                
              <div>
                <button type="button" class="inline-flex items-center p-3 text-sm text-black sm">
                      
                    <NotificationsIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />      
                </button>
                </div>
                <div class="flex md:order-2  ">
                <NavLink to="/classroom">   
                <button type="button" class={`min-h-full inline-flex items-center p-4 text-cyan-500 text-bs  rounded-md ${location.pathname == "/classroom" || location.pathname == "/tattendance" || location.pathname == "/tbehaviour" || location.pathname == "/tvideo" || location.pathname == "/tstatus" || location.pathname == "/tresult" ? "text-cyan-500 text-lg underline underline-offset-8"  : "text-cyan-500 text-bs hover:bg-slate-100 "}`}>   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block " >ClassRoom  </span>
                    </button>
                </NavLink>
                <NavLink to="/thome">   
                <button type="button" class={`min-h-full inline-flex items-center p-4 text-cyan-500 text-bs  rounded-md ${location.pathname == "/thome"  ? "text-cyan-500 text-lg underline underline-offset-8"  : "text-cyan-500 text-bs hover:bg-slate-100"}`}>   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block " >ClassStory  </span>
                    </button>
                </NavLink>
                        <Menu as="div" className="relative inline-block text-left">
                    <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-4 bg-white text-cyan-500 text-sm hover:bg-slate-100 ">
                                        <AddIcon/>       
                                        Create
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
                        <button
                        onClick={()=>{
                          navigate('/thome')
                        }}
                        className={classNames(
                            active ? 'bg-gray-100 w-full text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm w-full'
                        )}
                        >
                        Create post
                        </button>
                    )}
                    </Menu.Item>

                    <Menu.Item>
                    {({ active }) => (
                        <NavLink to="/eventhome">
                            <button
                        className={classNames(
                          active ? 'bg-gray-100 w-full text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm w-full'
                      )}
                        >
                        Create an Event
                        </button>
                        </NavLink>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <button
                        onClick={()=>{
                          navigate("/tvideo")
                        }}
                        className={classNames(
                          active ? 'bg-gray-100 w-full text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm w-full'
                      )}
                        >
                        video conferece
                        </button>
                    )}
                    </Menu.Item>
                    
                    
                </div>

                </Menu.Items>
            </Transition>
            </Menu>
            
                <div>
                <NavLink to="/message">
                <button type="button" class={`min-h-full inline-flex items-center p-4 text-cyan-500 text-bs  rounded-md ${location.pathname == "/message" ? "text-cyan-500 text-lg underline underline-offset-8"  : "text-cyan-500 text-bs hover:bg-slate-100"}`}>   
                        <ChatIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />        
                        <span className="text-sm pl-2 hidden sm:block">Message  </span>
                    </button>
                </NavLink>
                </div>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-4 bg-white text-cyan-500 text-sm hover:bg-slate-100 ">
                                <PersonAddIcon/>       
                                        Invite
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
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Invite Parents
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Invite CoTeacher
                        </a>
                    )}
                    </Menu.Item>
                </div>

                </Menu.Items>
            </Transition>
            </Menu> 
                <Menu as="div" className="relative inline-block text-left">
              <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-4 bg-white text-cyan-500 text-sm hover:bg-slate-100 ">
                         <SettingsIcon/>       
                                Settings
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
                 <NavLink to="/tsetting" >
                <a
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  ClassRoom Setting
                </a>
               </NavLink>

              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account Setting 
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button onClick={()=>{
                  localStorage.clear()
                  navigate('/tlogin')
                  window.location.reload();

                }}>
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
                </div>
        </nav>
              );
            }
export default Navbar;
            
        

import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import React, { useState, Fragment, useEffect } from 'react'
import Createdropdown from './createdropdown'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import SettingModal from './settingmodal'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const Navbar = () => {
    const [handler, sethandler] = useState(0)
    const editclassRoom = () => {
        if(handler!==1)
        sethandler(1);
      };

    const location = useLocation();

    console.log(location.pathname);
    


    return (
        <nav className='class="teachersidenavbarcontainer  bg-cyan-500 border-blue-100 h-14 md:h-18 lg:24 mx-auto shadow-lg z-100'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                
              <div>
                <button type="button" class="inline-flex items-center p-3 text-sm text-cyan-600 sm">
                      
                    <NotificationsIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />      
                </button>
                </div>
                <div class="flex md:order-2  ">
                <NavLink to="/classroom">   
                <button type="button" class={`min-h-full inline-flex items-center p-4 text-white text-sm font-medium shadow-sm rounded-md ${location.pathname == "/classroom" || location.pathname == "/tattendance" || location.pathname == "/tbehaviour" || location.pathname == "/tvideo" || location.pathname == "/tstatus" || location.pathname == "/tresult" ? "text-cyan-600 bg-cyan-200 underline underline-offset-8"  : "text-white hover:bg-cyan-600 "}`}>   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block " >ClassRoom  </span>
                    </button>
                </NavLink>
                <NavLink to="/thome">   
                <button type="button" class={`min-h-full inline-flex items-center p-4 text-white text-sm font-medium shadow-sm rounded-md ${location.pathname == "/thome"  ? "text-cyan-600 bg-cyan-200 underline underline-offset-8"  : "text-white hover:bg-cyan-600 "}`}>   
                      <FlightClassIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />                        
                      <span className="text-sm pl-2 hidden sm:block " >ClassStory  </span>
                    </button>
                </NavLink>
                        <Menu as="div" className="relative inline-block text-left">
                    <div>
                            <Menu.Button className="inline-flex justify-center w-full   rounded-md  shadow-sm px-4 py-4 bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 ">
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
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Create post
                        </a>
                    )}
                    </Menu.Item>

                    <Menu.Item>
                    {({ active }) => (
                        <NavLink to="/eventhome">
                            <a
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Create an Event
                        </a>
                        </NavLink>
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
                        video conferece
                        </a>
                    )}
                    </Menu.Item>
                    
                    
                </div>

                </Menu.Items>
            </Transition>
            </Menu>
            
                <div>
                <NavLink to="/message">
                <button type="button" class={`min-h-full inline-flex items-center p-4   rounded-md text-white text-sm font-medium shadow-sm ${location.pathname == "/message"  ? "text-cyan-600 bg-cyan-200 underline underline-offset-8"  : "text-white hover:bg-cyan-600 "}`}>   
                        <ChatIcon class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"  />        
                        <span className="text-sm pl-2 hidden sm:block">Message  </span>
                    </button>
                </NavLink>
                </div>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                            <Menu.Button className="inline-flex justify-center w-full   rounded-md  shadow-sm px-4 py-4 bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 ">
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
                    <Menu.Button className="inline-flex justify-center w-full  rounded-md  shadow-sm px-4 py-4 bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 ">
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
                  Edit ClassRoom
                </a>
               </NavLink>

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
                  Edit Students
                </a>
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
                  View Report
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
                 View Attendance
                </a>
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
                  manage student Result 
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
                 Manage Skill
                </a>
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
                  Logout
                </a>
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
            
        

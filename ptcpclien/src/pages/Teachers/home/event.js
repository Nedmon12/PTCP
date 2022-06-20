import React, { useState, useContext, useEffect } from 'react'
import Navbar from "../../../components/NavbarforTeacher"
import Post from "../../../components/Post"
import Event from "../../../components/events"
import NewPost from "../../../components/newpost"
import { AuthContext } from '../../../context/AuthContext'
import useFetch from '../../../hook/useFetch'
import axios from "axios";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
export default function EventContainer() {
    const {user}= useContext(AuthContext)
    const [posts, setPosts] = useState([]);
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
  return (
    <div className='totalcontainer'>
        <div  className='sticky top-0 '>
        <Navbar/>
        </div>
        <div className='postandeventcontainer flex flex-row bg-slate-50 overflow-auto'>    
            <div className='sidebar basis-1/6' ></div>
            <div className=' w-[56vh] h-[140vh] containeroffeeds basis-4/6 flex flex-col border-2 mt-5 border-slate-100 rounded-sm bg-white'>
                <div className='w-full h-16 border-b-2' >
                    <span class="block tracking-wide text-black text-xl p-4 font-bold ">Create Event</span>
                </div>
                <div className='w-full h-[85vh] border-b-2' >
                    <div className='flex flex-row h-16 p-1' >
                            <span class="block tracking-wide text-black text-lg  p-6 ">Title</span>
                            <input type="text" id="large-input" class="mx-4 my-2 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </input>
                    </div>
                    <div className='flex flex-row h-[45vh]' >
                        <span class="block tracking-wide text-black text-lg  p-6 ">Time And Date</span>
                        <div className='' >
                        <DateRange
                            className='bg-white border-2 border-slate-100'
                            editableDateInputs={true}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                        />
                        </div>
                        <input type="text" id="large-input" placeholder='8:00 am' class="mx-4 my-6 block w-[10vh] h-[8vh] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </input>
                        <span class="block tracking-wide text-black text-lg  p-6 ">To</span>
                        <input type="text" id="large-input" placeholder='12:00 am' class="mx-4 my-6 block w-[10vh] h-[8vh] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </input>
                    </div>
                    <div className='flex flex-row h-16 p-1' >
                            <span class="block tracking-wide text-black text-lg  p-6 ">Description</span>
                            <input type="text" id="large-input" class="mx-4 my-6 block w-full h-[15vh] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </input>
                    </div>
                 </div>
                 <div className='w-full h-[35vh] border-b-2 ' >
                    <div className='flex flex-row h-16' >
                        <span class="block tracking-wide text-black text-lg  p-6 ">Reminder</span>
                        <div className='flex flex-col p-4 text-lg' >
                        <div class="form-check p-2">
                            <input class="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" checked>
                            </input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            Immediately
                            </label>
                        </div>
                        <div class="form-check p-2">
                            <input class="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked">
                                </input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                            5 days before
                            </label>
                        </div>
                        <div class="form-check p-2">
                            <input class="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                            </input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            1 day before
                            </label>
                        </div>
                        <div class="form-check p-2">
                            <input class="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                            </input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            1 hour before
                            </label>
                        </div>
                       

                            <span class="block tracking-wide text-gray-500 text-sm  p-6 ">Choose when reminders get sent to parents for this event
</span>
                        </div>
                    </div>
                    
                 </div>
                 <div className='w-full h-[15vh] border-b-2' >
                    <div className='flex flex-row-reverse p-4' >
                        
                        <button className='m-5  w-[6vw] SendButton  text-white bg-cyan-500  h-10 rounded-md shadow-lg'  >Create</button>
                        <button className='m-5 rounded-md w-[6vw] SendButton text-white bg-cyan-500  h-10 shadow-lg ' >Cancel</button>
                    </div>
                 </div>
            </div>
            <div className='leftbar basis-1/6'> </div>
        </div>    
    </div>
  )
}

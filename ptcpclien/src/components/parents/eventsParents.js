import React from 'react'
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";
export default function events() {
  return (
    <div className='ventwrapper mt-4 ml-4 border bg-white md:w-52 w-full border-slate-200 rounded-md h-48'  >
        <div className='allevent p-3 '>
            <div className="eventTop">
                <a>
                    <span>
                        Upcoming Class Events
                    </span>
                </a>
            </div>
            <hr className="shareHr mt-4" />
            <div className="newpostBottom">

            </div>
        </div>
    </div>
  )
}

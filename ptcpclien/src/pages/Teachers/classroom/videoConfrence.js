import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./videoconference/videocall";
import Footerlog from '../../../components/Footer'
import NavbarForTeachers from "../../../components/NavbarforTeacher"
import ClassroomNavbar from '../../../components/ClassroomNavbar'
import Students from '../../../components/students'
export default function Classroom() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className='h-screen'>
        <div className='pb-1'>
            <NavbarForTeachers/>
        </div>
        <div className='maincontainer h-5/6 min-w-full'>
            <ClassroomNavbar/>
            <div>
            <div className="App mt-40 h-[10vh] ">
                {inCall ? (
                  <VideoCall setInCall={setInCall} />
                ) : (
                  <div>
                  <button className="bg-cyan-200 text-gray-700 h-16 w-72 text-xl rounded-md " onClick={() => setInCall(true)}
                  >
                    Join Teacher Parents Meeting
                  </button>
                  </div>
                )}
            </div>  


            </div>
            
            {/*list  of students*/}      
        </div>
        <div  className="pt-3">
        <Footerlog/>
        </div>
    </div>    
  )
}

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
            <ClassroomNavbar/>
        </div>
        <div className='App maincontainer basis 9/12 h-[75vh] min-w-full p-2'>
                {inCall ? (
                  <VideoCall setInCall={setInCall} />
                ) : (
                  <div>
                  <button className="bg-cyan-400 text-white h-16 w-72 text-xl rounded-md " onClick={() => setInCall(true)}
                  >
                    Join Teacher Parents Meeting
                  </button>
                  </div>
                )}
          </div>
        <div  className="pt-3">
        <Footerlog/>
        </div>
    </div>    
  )
}

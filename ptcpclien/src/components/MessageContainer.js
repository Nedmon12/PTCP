import React, { useState, useEffect, useContext } from 'react'
import GroupIcon from '@mui/icons-material/Group';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Textinput from './Textinput'
import AllParents from './AllParents'
import ParentsMessages from './ParentsMessages'
import UnInvitedParents from './UnInvitedParents'
import MessageView from './MessageView'
export default function MessageContainer() {
    const {user} = useContext(AuthContext);
    const [student, setStudent] = useState([]);
    useEffect(() => {
      const fetchStudent = async () => {
        const res = await axios.get("/api/studentManagmentRoutes/fetchstudent/"+ user.user._id);
        setStudent(res.data);
      };
      fetchStudent();
    }, [user.user._id]);
    const isParentInvited=()=>{
        
    }

    return (
    
        <div className='border rounded-lg h-full mx-44 bg-white flex flex-row mt-2 shadow-lg' >
            <div className='basis-1/5 border-r flex flex-col'>
            <div className='basis-1/12 border-b'>
                <span className='text-xl justify-center pl-6' >Messages</span>
            </div>
            <div className='Conversations basis-11/12 flex flex-col overflow-y-scroll'>
                <div>
                    <AllParents/>
                </div>
                <div>

                {student.map((s)=>(
                        <ParentsMessages key={s._id} student={s}/>
                    )
                    )}
                </div>
                <div>
                    <UnInvitedParents/>
                   
                </div>
            </div>
        </div>
        <div className='basis-4/5 flex flex-col'>
            <div className='basis-1/12 border-b'>
                <span className='text-xl pt-8 pl-6'>Abel Dejene's Parent</span>
            </div>
            <div className='messagesview basis-10/12 border-b overflow-y-auto '>
                <div className='p-2 pt-3' >
                    <MessageView own={true} />
                    <MessageView />
                    <MessageView own={true}/>
                    <MessageView />
                </div>
            </div>
            <div className='messagesinput basis-1/12 '>
                <Textinput/>
            </div>
        </div>
        

    </div>

  )
}

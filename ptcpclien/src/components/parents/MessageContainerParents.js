import React, { useState, useEffect, useContext } from 'react'
import GroupIcon from '@mui/icons-material/Group';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import Textinput from './Textinput'
import TeacherMessages from './teacherMessages'
import MessageView from './MessageView'
export default function MessageContainer({}) {
    const {user}= useContext(AuthContext)
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [conversations, setConversations] = useState([]);

    const [teacher, setTeacher] = useState([]);

      
    useEffect(() => {
      const fetchmykidteacher = async () => {
        const res = await axios.get("/api/studentManagmentRoutes/fetchmykidteacher/"+ user.user.teacherid);
        setTeacher(res.data);
      };
      fetchmykidteacher();
    }, [user.user._id]);
    console.log(teacher._id)

      useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await axios.get("api/conversations/" +user.user._id);
            setConversations(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
      }, [user.user._id]);

        
      console.log()
      useEffect(() => {
        const getMessages = async () => {
          try {
            const res = await axios.get("api/messages/"+conversations._id);
            setMessages(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getMessages();
      }, [currentChat]);
  console.log(messages)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
      return (
        <div className='border rounded-lg h-full mx-44 bg-white flex flex-row mt-2' >
            <div className='basis-1/5 border-r flex flex-col'>
            <div className='basis-1/12 border-b'>
                <span className='text-xl justify-center pl-6' >Messages</span>
            </div>
            <div className='Conversations basis-11/12 flex flex-col overflow-y-scroll'>
                <div>
                        <TeacherMessages teacher={teacher}/>
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

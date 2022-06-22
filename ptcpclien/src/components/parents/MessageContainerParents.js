import React, { useRef, useState, useEffect, useContext } from 'react'
import GroupIcon from '@mui/icons-material/Group';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import Textinput from './Textinput'
import TeacherMessages from './teacherMessages'
import MessageView from '../MessageView'
import io from "socket.io-client"
export default function MessageContainer({}) {
    const {user}= useContext(AuthContext)
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [conversations, setConversations] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [newMessage, setNewMessage] = useState("")
    const [teacher, setTeacher] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const scrollRef = useRef();

    console.log("fetched user : "+user.user.teacherid)
    useEffect(() => {
      socket.current = io("ws://localhost:8900");
      socket.current.on("getMessage", (data) => {
        setArrivalMessage({
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
        });
      });
    }, []);

    useEffect(() => {
      arrivalMessage &&
        currentChat?.members.includes(arrivalMessage.sender) &&
        setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);
  
    useEffect(() => {
      socket.current.emit("addUser", user.user._id);
      socket.current.on("getUsers", (users) => {
        setOnlineUsers(
         // user.followings.filter((f) => users.some((u) => u.userId === f))
        );
      });
    }, [user]);

    useEffect(() => {
      const fetchmykidteacher = async () => {
        try {
          const res = await axios.get("/api/studentManagmentRoutes/fetchmykidteacher/"+user.user.teacherid);
          console.log("res.data possibly teacher : "+res.data)
          setTeacher(res.data);
        }
        catch (err) {
          console.log(err)
        }
      };
      fetchmykidteacher();
    }, [user.user.teacherid]);
    //console.log(teacher._id)

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
            const res = await axios.get("api/messages/"+currentChat._id);
            setMessages(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getMessages();
      }, [currentChat]);
  console.log(messages)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user.user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user.user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("api/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
      return (
        <>
        <div className='border rounded-lg h-full mx-44 bg-white flex flex-row mt-2' >
            <div className='basis-1/5 border-r flex flex-col'>
            <div className='basis-1/12 border-b'>
                <span className='text-xl justify-center pl-6' >Messages</span>
            </div>
            <div className='Conversations basis-11/12 flex flex-col overflow-y-scroll'>
                <div>
                <span className="">
                        {conversations.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>
                      <TeacherMessages teacher={teacher}/>
                        </div>
                        ))}
                        </span>

                                    </div>
            </div>
        </div>
        <div className='basis-4/5 flex flex-col'>
            <div className='basis-1/12 border-b'>
                <span className='text-xl pt-8 pl-6'>Abel Dejene's Parent</span>
            </div>
            <div className='messagesview basis-10/12 border-b overflow-y-auto '>
                <div className='p-2 pt-3' >
                {messages.map((m) => (
                    <div ref={scrollRef}>
                      <MessageView message={m} own={m.sender === user.user._id} />
                    </div>
                  ))}
                </div>
            </div>
            <div className='messagesinput basis-1/12 '>
            <input placeholder="Type Message"className="PostInput pl-3 w-full placeholder-cyan-500 h-full border" onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}/>
            </div>
            <div className='basis-2/12' >
            <button className=" w-full SendButton p-3 text-white bg-cyan-500 " onClick={handleSubmit}>
                            Send
            </button>
            </div>
        </div>        
    </div>
    </>
  )
}

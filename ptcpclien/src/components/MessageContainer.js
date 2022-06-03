import React from 'react'
import Textinput from './Textinput'
import AllParents from './AllParents'
import ParentsMessages from './ParentsMessages'
import UnInvitedParents from './UnInvitedParents'
import MessageView from './MessageView'
import Conversation from './messaging/conversation'
import { useContext, useEffect, useRef, useState } from "react";
import {AuthContext} from '../context/AuthContext'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { io } from "socket.io-client";

export default function MessageContainer() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

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
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    
        <div className='border rounded-lg h-full mx-44 bg-white flex flex-row mt-2' >
            <div className='basis-1/5 border-r flex flex-col'>
            <div className='basis-1/12 border-b'>
                <span className='text-xl justify-center pl-6' >Messages</span>
            </div>
            <div className='Conversations basis-11/12 flex flex-col overflow-y-scroll'>
                <div>
                    <AllParents/>
                </div>
                <div className='RecentparenrtMessages w-full h-20 text-cyan-400 hover:bg-cyan-100 cursor-pointer flex flex-row'>
                    <div className='profileplace basis-1/4 ' >
                    <img className="postProfileImg ml-3 h-10 w-10  border border-cyan-400 rounded-full object-cover" src="assets/profile/1.jpg"alt=""/>   
                    </div>
                    <div className='Desc basis-3/4 ' >
                    <div><span className="shareOptionText text-black text-sm">
                        {conversations.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>
                        <Conversation conversation={c} currentUser={user} />
                        </div>
                        ))}
                        </span>
                        </div>
                    </div>
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
                {messages.map((m) => (
                    <div ref={scrollRef}>
                      <MessageView message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
            </div>
            <div className='messagesinput basis-1/12 '>
            <div className='textinput flex flex-row' >
        <div className='basis-2/12 border flex flex-row' >
            <div className="shareOption p-3 text-cyan-400">
                <AttachFileIcon fill="currentColor" className="Attactfile" />
            </div>
            <div className="shareOption p-3 text-cyan-400">
                <ImageIcon fill="currentColor" className="AttactImage" />
            </div>
            <div className="shareOption p-3 text-cyan-400">
                <EmojiEmotionsIcon fill="currentColor" className="AttactEmojies" />
            </div>
        </div>
        <div className='basis-8/12' >
            <input placeholder="Type Message"className="PostInput pl-3 w-full placeholder-cyan-500 h-full border"/>
        </div>
        <div className='basis-2/12' >
            <button className=" w-full SendButton p-3 text-white bg-cyan-500 " onClick={handleSubmit}>
                            Send
            </button>
        </div>
        
    </div>
            </div>
        </div>
        

    </div>

  )
}

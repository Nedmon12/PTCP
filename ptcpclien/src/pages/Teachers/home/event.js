import React, { useState, useContext, useEffect } from 'react'
import Navbar from "../../../components/NavbarforTeacher"
import Post from "../../../components/Post"
import Event from "../../../components/events"
import NewPost from "../../../components/newpost"
import Sidebar from '../../../components/Sidebar'
import { AuthContext } from '../../../context/AuthContext'
import useFetch from '../../../hook/useFetch'
import axios from "axios";
export default function Event() {
    const {user}= useContext(AuthContext)
    const [posts, setPosts] = useState([]);
  return (
    <div className='totalcontainer'>
        <div  className='sticky top-0 '>
        <Sidebar/>
        <Navbar/>
        </div>
        <div className='postandeventcontainer flex flex-row'>    
            <div className='sidebar basis-1/4' ></div>
            <div className='containeroffeeds basis-1/2 flex flex-row'>
                <div className='basis-2/3'>
                    <NewPost/> 
                    {posts.map((p)=>(
                        <Post key={p._id} post={p}/>
                    )
                    )}      
                </div>
                <Event  className='basis-1/3'/>
            </div>
            <div className='leftbar basis-1/4'>hey</div>
        </div>    
    </div>
  )
}

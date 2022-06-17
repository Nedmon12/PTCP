import React, { useState, useContext, useEffect } from 'react'
import Navbar from "../../../components/NavbarforTeacher"
import Post from "../../../components/Post"
import Event from "../../../components/events"
import NewPost from "../../../components/newpost"
import Sidebar from '../../../components/Sidebar'
import { AuthContext } from '../../../context/AuthContext'
import useFetch from '../../../hook/useFetch'
import axios from "axios";
export default function Home() {
    const {user}= useContext(AuthContext)
    
    const [posts, setPosts] = useState([]);

   
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/api/posts/getpost/" + user.user._id);
          setPosts(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
        };
        fetchPosts();
      }, [user._id]);
    


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
            <div className='leftbar basis-1/4'></div>
        </div>
    
    
    </div>
  )
}

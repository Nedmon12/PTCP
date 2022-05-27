import React, { useState, useContext, useEffect } from 'react'
import Navbar from "../../../components/parents/parentsnavbar"
import Header from "../../../components/parents/parentsheader"
import Post from "../../../components/parents/ParentsPost"
import Event from "../../../components/parents/eventsParents"
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
          const res = await axios.get("/api/posts/getpost/" + user._id);
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
        <Header/>
        <Navbar/>
        </div>
        <div className='postandeventcontainer flex flex-row bg-slate-50'>    
            <div className='sidebar basis-1/5' ></div>
            <div className='containeroffeeds basis-3/5 flex flex-row'>
                 <Event  className='basis-1/3 mr-20 bg-white'/>
                 <div className='basis-2/3 ml-10 '> 
                    {posts.map((p)=>(
                        <Post key={p._id} post={p}/>
                    )
                    
                    )}
                    
                    
                </div>
               
            </div>
            <div className='leftbar basis-1/5'></div>
        </div>
    
    
    </div>
  )
}

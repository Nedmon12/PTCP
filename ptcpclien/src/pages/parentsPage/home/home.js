import React, { useState, useContext, useEffect } from 'react'
import Navbar from "../../../components/parents/parentsnavbar"
import Header from "../../../components/parents/parentsheader"
import Post from "../../../components/parents/ParentsPost"
import Event from "../../../components/parents/eventsParents"
import Connected from "../../../components/parents/Connectedto"
import NewPost from "../../../components/newpost"
import { AuthContext } from '../../../context/AuthContext'
import useFetch from '../../../hook/useFetch'
import axios from "axios";
export default function Home() {
    const {user}= useContext(AuthContext)
    const [posts, setPosts] = useState([]);
    const [teacher, setTeacher] = useState([]);
    const [student, setStudent]= useState([]);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
   
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/api/posts/getpost/" + user.user.teacherid);
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
            <div className='sidebar basis-2/12' ></div>
            <div className='containeroffeeds basis-8/12 flex flex-row'>
                 <Event  className='basis-3/12 mr-20 bg-white'/>
                 <div className='basis-6/12 ml-10 '> 
                    {posts.map((p)=>(
                        <Post key={p._id} post={p} teacher={setTeacher}/>
                    )
                    )}
                </div>
                <Connected   className='basis-3/12 mr-20 bg-white'/>

               
            </div>
            <div className='leftbar basis-2/12'></div>
        </div>
        
    </div>
  )
}

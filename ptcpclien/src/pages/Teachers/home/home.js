import React from 'react'
import Navbar from "../../../components/NavbarforTeacher"
import Post from "../../../components/Post"
import Event from "../../../components/events"
import NewPost from "../../../components/newpost"
import {Posts} from '../../../components/Posts'
export default function home() {
  return (
    <div className='totalcontainer'>
        <div  className='sticky top-0 '>
        <Navbar/>
        </div>
        <div className='postandeventcontainer flex flex-row'>    
            <div className='sidebar basis-1/4' ></div>
            <div className='containeroffeeds basis-1/2 flex flex-row'>
                <div className='basis-2/3'>
                    <NewPost/> 
                    {Posts.map((p)=>(
                        <Post key={p.id} post={p}/>
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

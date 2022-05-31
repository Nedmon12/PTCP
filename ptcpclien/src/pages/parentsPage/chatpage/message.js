import React from 'react'
import Navbar from "../../../components/parents/parentsnavbar"
import Header from "../../../components/parents/parentsheader"
import MessageContainer  from "../../../components/parents/MessageContainerParents"
import Footer from "../../../components/parents/Footerparents"
export default function  () {
  return (
    <div className='h-screen  bg-slate-50	'>
      <div>
        <Header/>
        <Navbar/>
      </div>
      <div className='maincontainer h-5/6 min-w-full'>
        <MessageContainer/>
      </div>
      <div className='mt-2'>
        <Footer/>
      </div>
       
        
    </div>
  )
}

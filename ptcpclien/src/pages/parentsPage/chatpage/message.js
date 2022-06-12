import React, { useState, useEffect, useContext } from 'react'
import GroupIcon from '@mui/icons-material/Group';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext'
import Navbar from "../../../components/parents/parentsnavbar"
import Header from "../../../components/parents/parentsheader"
import MessageContainer  from "../../../components/parents/MessageContainerParents"
import Footer from "../../../components/parents/Footerparents"
export default function  () {
  const {user}= useContext(AuthContext)
     
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

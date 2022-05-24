import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Land from './pages/landingpage/land'
import { Routes,Route,Switch, Navigate} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'

import Home from './pages/Teachers/home/home';
import Chat from './pages/Teachers/chatpage/chatpage';
import Classroom from './pages/Teachers/classroom/classroom';
import TVideoConf from './pages/Teachers/classroom/videoConfrence';
import TAttendance from './pages/Teachers/classroom/Attendance';
import TBehavior from './pages/Teachers/classroom/Behavior';
import TStatus from './pages/Teachers/classroom/Status';
import TResult from './pages/Teachers/classroom/Result';
import Login from './pages/landingpage/login'
import TLogin from './pages/loginpage/Teacherslogin'

import { AuthContext } from './context/AuthContext';
import { useContext } from "react";
import Tregister from "./pages/loginpage/teacherregister"

import AdminPage from './components/adminMain'


function App() {
  const { user } =useContext(AuthContext)
  console.log(user);
  return (

<Provider store = {store}>
  <Routes>
      <Route path='/' element={ user ? <Classroom/> : <TLogin/> }> </Route>

      <Route path='/tlogin' element={ user ? <Navigate to="/" /> : <TLogin/> }> </Route>
      <Route path='/tregister' element={ user ? <Navigate to="/" /> : <Tregister/> }> </Route>

      <Route path='/tregister' element={<Tregister/>} />
      <Route path='/thome' element={<Home/>} />
      <Route path='/classroom' element={<Classroom/>}  />
      <Route path='/message' element={<Chat/>}  />
      <Route path='/login' element={<Login/>}  />
      <Route path='/tlogin' element={<TLogin/>}  />
      <Route path='/tvideo' element={<TVideoConf/>}  />
      <Route path='/tattendance' element={<TAttendance/>}  />
      <Route path='/tbehaviour' element={<TBehavior/>}  />
      <Route path='/tresult' element={<TResult/>}  />
      <Route path='/tstatus' element={<TStatus/>}  />
      <Route path='/adminDashboard' element={<AdminPage/>} />
      
      
 </Routes>

    </Provider>
    
  );
}

export default App;

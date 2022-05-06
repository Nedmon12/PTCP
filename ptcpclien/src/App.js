import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Land from './landingpage/land.js';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import { Routes,Route,} from "react-router-dom";
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

function App() {
  return (
    <Provider>
      <Routes>
        <Route path='/' element={<Land/>}  />
        <Route path='/Thome' element={<Home/>}  />
        <Route path='/classroom' element={<Classroom/>}  />
        <Route path='/message' element={<Chat/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/tlogin' element={<TLogin/>}  />
        <Route path='/tvideo' element={<TVideoConf/>}  />
        <Route path='/tattendance' element={<TAttendance/>}  />
        <Route path='/tbehaviour' element={<TBehavior/>}  />
        <Route path='/tresult' element={<TResult/>}  />
        <Route path='/tstatus' element={<TStatus/>}  />
    </Routes>
    </Provider>
    
  );
}

export default App;

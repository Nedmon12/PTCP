import React from "react";
import "./App.css";
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Land from './pages/landingpage/land'
import { Routes,Route,Switch, Navigate} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import Event from './pages/Teachers/home/event';
import Home from './pages/Teachers/home/home';
import Setting from './pages/Teachers/home/setting';
import Psetting from './pages/parentsPage/home/setting';

import Chat from './pages/Teachers/chatpage/chatpage';
import Classroom from './pages/Teachers/classroom/classroom';
import TVideoConf from './pages/Teachers/classroom/videoConfrence';
import PVideoConf from './pages/parentsPage/videoconference/videoConfrence';

import TAttendance from './pages/Teachers/classroom/Attendance';
import TBehavior from './pages/Teachers/classroom/Behavior';
import TStatus from './pages/Teachers/classroom/Status';
import TResult from './pages/Teachers/classroom/Result';
import Login from './pages/landingpage/login'
import TLogin from './pages/loginpage/Teacherslogin'
import Phome from './pages/parentsPage/home/home'
import Pmessage from './pages/parentsPage/chatpage/message'
import Message from './pages/Teachers/chatpage/chatpage'

import axios from 'axios';

import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Tregister from "./pages/loginpage/teacherregister"
import Pregister from "./pages/loginpage/parentregister"
import PLogin from './pages/loginpage/Parentslogin'
import Landing from './pages/landingpage/land'
import Subscribe from './pages/landingpage/subscribe'
import ChildStatus from "./pages/parentsPage/childperformance/performance"
import AdminPage from './components/adminMain'


function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
      <Routes>
        <Route path="/tregister" element={user ? <Navigate to="/classroom" /> : <Tregister />}
        >
          {" "}
        </Route>
        <Route path="/thome" element={<Home />} />{" "}
        <Route path="/classroom" element={user ? <Classroom/> : <TLogin/> }/>{" "}
        <Route path="/message" element={<Message />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/tvideo" element={<TVideoConf />} />{" "}
        <Route path="/tattendance" element={<TAttendance />} />{" "}
        <Route path="/tbehaviour" element={<TBehavior />} />
        <Route path="/tresult" element={<TResult />} />{" "}
        <Route path="/tstatus" element={<TStatus />} />{" "}
        <Route path="/tsetting" element={<Setting/>} />{" "}
        <Route path="/eventhome" element={<Event/>} />{" "}
        <Route path="/adminDashboard" element={<AdminPage />} />

       <Route path='/' element={<Landing/>}> </Route>
    <Route path='/Subscribe' element={ <Subscribe/>}> </Route>



    
      <Route path='/psetting' element={user ? <Psetting/>: <PLogin/> } />
      <Route path='/phome' element={ user ? <Phome/> : <PLogin/> }> </Route>
      <Route path='/pmessage' element={ user ? <Pmessage/> : <PLogin/> }> </Route>
      <Route path='/childstatus' element={user ? <ChildStatus/>:<PLogin/>} />  
      <Route path='/pregister' element={user ? <Phome/> :<Pregister/>} />
      <Route path='/plogin' element={ user ? <Phome/> : <PLogin/> }> </Route>
      <Route path="/pvideo" element={user ? <PVideoConf/>: <PLogin/>} />{" "}



        <Route path="/plogin" element={<PLogin />} />
        <Route path="/plogin" element={user ? <Phome /> : <pLogin />}>
          {" "}
        </Route>
        <Route path="/tlogin" element={user ? <Navigate to="/" /> : <TLogin />}>
          {" "}
        </Route>
      </Routes>
  )
};

export default App;

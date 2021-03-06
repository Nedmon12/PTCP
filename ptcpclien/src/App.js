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
import TPsetting from './pages/Teachers/home/settingAccount';

import Psetting from './pages/parentsPage/home/setting';

import Chat from './pages/Teachers/chatpage/chatpage';
import Classroom from './pages/Teachers/classroom/classroom';
import TVideoConf from './pages/Teachers/classroom/videoConfrence';
import PVideoConf from './pages/parentsPage/videoconference/videoConfrence';

import TAttendance from './pages/Teachers/classroom/Attendance';
import TBehaviour from './pages/Teachers/classroom/Behavior';
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
import AdminDashboard from './components/admin/Dashboard'
import SchoolsPage from './components/admin/UserListPage'
import Forgetpassword from './pages/loginpage/forgetpassword'
import Resetpassword from './pages/loginpage/reset'
function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
      <Routes>
        <Route path="/forgetpassword" element={user ? <Navigate to="/classroom" /> : <Forgetpassword/>} />
        <Route path="/resetpassword" element={user ? <Navigate to="/classroom" /> : <Resetpassword/>} />
        
        <Route path="/tregister" element={user ? <Navigate to="/classroom" /> : <Tregister />} />

        <Route path="/thome" element={<Home />} />{" "}
        <Route path="/tlogin" element={user ? <Home /> : <TLogin/> } />{" "}
        
        <Route path="/classroom" element={user ? <Classroom/> : <TLogin/> }/>{" "}
        <Route path="/message" element={user ? <Message/> :<TLogin />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/tvideo" element={user ? <TVideoConf/> :<TLogin />} />{" "}
        <Route path="/tattendance" element={user ? <TAttendance/> :<TLogin />} />{" "}
        <Route path="/tbehaviour" element={user ? <TBehaviour/> :<TLogin />} />
        <Route path="/tresult" element={user ? <TResult/> :<TLogin />} />{" "}
        <Route path="/tstatus" element={user ? <TStatus/> :<TStatus />} />{" "}
        <Route path="/tsetting" element={user ? <Setting/> :<TLogin/>} />{" "}
        <Route path="/tpsetting" element={user ? <TPsetting/> :<TLogin/>} />{" "}
        
        <Route path="/eventhome" element={user ? <Event/> :<TLogin/>} /> {" "}
        <Route path="/adminDashboard" element={<AdminDashboard />} />

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
        <Route path='adminDashboard/schools' element={<SchoolsPage/>}></Route>
      </Routes>
  )
};

export default App;

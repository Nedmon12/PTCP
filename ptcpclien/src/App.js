import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Land from './pages/landingpage/land'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Teachers/home/home';
import Classroom from './pages/Teachers/classroom/classroom';
function App() {
  return (
    <div>
      <Home/>
      
      
    </div>
  );
}

export default App;

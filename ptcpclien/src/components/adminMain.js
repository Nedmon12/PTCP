import React , {Component} from "react"
import Dashboard from './admin/dashboard'
import Sidebar from './admin/Sidebar'
import SchoolList from "./admin/SchoolList"
import SchoolEditable from "./admin/SchoolEditable"
//import '../css/adminHome.css'

  

export default class adminMain extends Component { 
    
    render () {
        return (
            <div className="flex flex-row">
            <div>
            <Sidebar />
            </div> 
            <SchoolEditable/>
            </div>    
        )
    } }

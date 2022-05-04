import React , {Component} from "react"
import Header from './Header'
import Dashboard from './admin/dashboard'
//import footer from '.'

export default class adminMain extends Component {
    render () {
        return (
            <div>
            <Header />
            <Dashboard />    
            </div>
        )
    } }

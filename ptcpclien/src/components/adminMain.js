import React , {Component} from "react"
import Header from './Header'
//import footer from '.'

export default class adminMain extends Component {

    constructor () {
        this.state = {
            schools : "unassigned"
        }
    }
    getSchoolList = () => {
        axios.get('/admin/schools').then(response => {
            this.setState({
                schools: response
            })
        })
    }
    render () {
        return (
            <div>
            <Header />      
            </div>
        )
    }
}
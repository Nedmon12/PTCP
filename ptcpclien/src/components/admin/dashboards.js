import React, {Component} from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getSchoolList } from "../../actions/schoolsAction";
import Navbar from '../Navbar'

class dashboard extends Component {
    componentDidMount() {
        this.props.getSchoolList()
    }
    render() {
        const {schools} = this.props.schools
        return (
            <div>
             {schools.map(school=> (
                 <li>{school.schoolName}</li>
             ))}
            </div>
        )
    }
}
dashboard.propTypes = {
    getSchoolList: PropTypes.func.isRequired,
    //TODO auth
    schools: PropTypes.object.isRequired
}
const mapStatetoProps = state => ({
    schools : state.schools
})
export default connect(mapStatetoProps, {getSchoolList})(dashboard)
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getSchoolList} from '../../actions/schoolsAction'
import {MDBDataTableV5} from 'mdbreact'
class SchoolsEditable extends Component {
    componentDidMount() {
        this.props.getSchoolList()
    }
    render () {
        const {schools} = this.props.schools
            const dataGrid = {
                columns: [
                    {
                        label : 'ID',
                        field: 'id',
                        sort: 'asc',
                        width: 400,                       
                    },
                    {
                        label : 'School Name',
                        field: 'schoolName',
                        sort: 'asc',
                        width: 200
                    },
                    {
                        label : 'Shool Admin',
                        field: 'schoolAdmin',
                        sort: 'asc'
                    },
                    {
                        label : 'Adress',
                        field: 'address',
                        sort: 'asc'
                    },
                    {
                        label : 'Contact',
                        field: 'contact',
                        sort: 'asc'
                    },
                ], 
                rows: []
            }
            schools.forEach(school => {
                dataGrid.rows.push({
                    id: school._id,
                    schoolName : school.schoolName,
                    schoolAdmin: school.schoolAdmin,
                    address: school.address,
                    contact: school.contact,
                    actions: <div>
                        <Link to={`/admin/school/${school.id}`} className="btn btn-primary py-1 px-2">
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <button className='btn btn-danger py-1 px-2 ml-2'>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                }
                    
                )
            })
        
    
        return (
            <div className="space-y-1.5">
                <h1 className='my-5'>Schools</h1>
                <MDBDataTableV5 data={dataGrid}
                striped
                entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4}
                hover/>
            </div>
        )
    }
    
}


SchoolsEditable.propTypes = {
    getSchoolList: PropTypes.func.isRequired,
    //TODO auth
    schools: PropTypes.object.isRequired
}
const mapStatetoProps = state => ({
    schools : state.schools
})

export default connect(mapStatetoProps, {getSchoolList}) (SchoolsEditable)
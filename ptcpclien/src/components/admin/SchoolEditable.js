import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getSchoolList} from '../../actions/schoolsAction'
import {MDBDataTableV5} from 'mdbreact'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
class SchoolsEditable extends Component {
    componentDidMount() {
        this.props.getSchoolList()
    }
    
    render () {
        const {schools} = this.props.schools
        const deleteProductHandler = (id) => {
            
        }    
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
                    {
                        label: 'Action',
                        field: 'actions'
                    }
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
                    actions: <><div>
                        <Link to={`/admin/school/${school._id}`}>
                            <EditOutlinedIcon></EditOutlinedIcon>
                        </Link>
                        <button>
                            <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
                        </button>
                    </div> </>
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
import React, {Component} from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getSchoolList } from "../../actions/schoolsAction";
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

const contextMenuItems = [
    'AutoFit',
    'AutoFitAll',
    'SortAscending',
    'SortDescending',
    'Copy',
    'Edit',
    'Delete',
    'Save',
    'Cancel',
    'PdfExport',
    'ExcelExport',
    'CsvExport',
    'FirstPage',
    'PrevPage',
    'LastPage',
    'NextPage',
  ];

  const ordersGrid = [
    {
      field: 'SchoolId',
      headerText: 'School ID',
      width: '150',
      editType: 'dropdownedit',
      textAlign: 'Center',
    },
    { field: 'schoolName',
      headerText: 'School Name',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'schoolAdmin',
      headerText: 'School Admin',
      format: 'C2',
      textAlign: 'Center',
      editType: 'numericedit',
      width: '150',
    },
    {
      headerText: 'Status',
      //template: gridOrderStatus,
      field: 'subscriptionStatus',
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'address',
      headerText: 'Address',
      width: '120',
      textAlign: 'Center',
    },
  
    {
      field: 'contact',
      headerText: 'Contact',
      width: '150',
      textAlign: 'Center',
    },
  ];

  const editing = { allowDeleting: true, allowEditing: true };


class dashboard extends Component {
    componentDidMount() {
        this.props.getSchoolList()
    }
    render() {
        const {schools} = this.props.schools
        return (
            <div>
              <GridComponent
        id="gridcomp"
        dataSource={schools}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
                  <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
        </GridComponent>
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

import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../context/AuthContext';
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTableV5} from 'mdbreact'
export default function WithMaterialSearch() {

    const dataGrid = {
        columns: [
      {
        label: 'First Name',
        field: 'firstname',
        width: 200,
         attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Second Name',
        field: 'secondname',
        width: 200,
         attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Total',
        field: 'total',
        width: 200,
      },
      {
        label: 'Average',
        field: 'office',
        width: 200,
      },
      {
        label: 'rank',
        field: 'age',
        sort: 'asc',
        width: 100,
      },
      
    ],
    rows: [],
  };
    const {user} = useContext(AuthContext);
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} scrollX scrollY entries={25} pagesAmount={4} data={dataGrid} materialSearch />;
}
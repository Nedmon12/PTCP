import React, { useContext } from 'react';
import DashboardHOC from './DashboardHOC';
import SchoolTable from './table/SchoolTable';
import { SchoolContext } from '../../context/schoolState/schoolContext';
import { Link } from 'react-router-dom';
import CustomLoader from '../common/CustomLoader';

const index = '2';
function UserListPage() {
  const { schools, loading } = useContext(SchoolContext).state;
  //change css to tailwind
  return (
    <div>
      <Link
        to="/dashboard/add-new-user"
        className="btn btn-primary float-right cursor-pointer mb-2 "
      >
        Add new school
      </Link>
      {!loading ? (
        <SchoolTable data={schools} />
      ) : (
        <CustomLoader text={'Getting users from DB! Hold on gee...'} />
      )}
    </div>
  );
}

export default DashboardHOC(UserListPage, index);

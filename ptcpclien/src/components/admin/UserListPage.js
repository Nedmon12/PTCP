import React, { useContext } from 'react';
import DashboardHOC from './DashboardHOC';
import SchoolTable from './SchoolTable/schoolTable';
import { SchoolContext } from '../../context/schoolState/schoolContext';
import { Link } from 'react-router-dom';
import CustomLoader from '../common/CustomLoader';
import Sidebar from './Sidebar'

const index = '2';
function UserListPage() {
  const {state} = useContext(SchoolContext);
  const { users, loading } = state;
  console.log("sate : ")
  // console.log("schools : "+schools)
  //change css to tailwind
  return (
    <div className="flex flex-row">
      <div flex flex-basis>
        <Sidebar />
      </div>
      <Link
        to="/dashboard/add-new-user"
        className="btn btn-primary float-right cursor-pointer mb-2 "
      >
        Add new school
      </Link>
      {!loading ? (
        <SchoolTable data={users} />
      ) : (
        <CustomLoader text={'Getting users from DB! Hold on gee...'} />
      )}
    </div>
  );
}

export default DashboardHOC(UserListPage, index);

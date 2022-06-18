import React, { useState, useEffect, useContext } from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';
import { Layout, message } from 'antd';
import  { SchoolContext }  from '../../context/schoolState/schoolContext';
import CustomFooter from './Footer';

function DashboardHOC(Component, index) {
  return function DashboardCustomHoc(props) {
    const [collapsed, setCollapsed] = useState(true);
    const handleSetCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const { state, UserReset } = useContext(SchoolContext);
    // const { AuthReset } = useContext(AuthReset);
    console.log("state : "+state)
    console.log("does my app make it here?")
    console.log("and this doesn't??"+state)
    const {
      error,
      errResponse,
      message: userMessage,
      me: loggedInUser
    } = state;
    console.log(state)
    useEffect(() => {
      if (error) {
        message.error(errResponse);
        UserReset();
      }
    }, [error]);

    useEffect(() => {
      if (userMessage) {
        message.success(userMessage);
        UserReset();
      }
    }, [userMessage]);
    const { history } = props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar
          index={index}
          collapsed={collapsed}
          loggedInUserId={loggedInUser ? loggedInUser._id : null}
        />
        <Layout className="site-layout">
          <PageHeader
            history={props.history}
            collapsed={collapsed}
            toggle={handleSetCollapsed}
          />
          <div className="container">
            <Component {...props} />
          </div>
          <CustomFooter />
        </Layout>
      </Layout>
    );
  };
}

export default DashboardHOC;

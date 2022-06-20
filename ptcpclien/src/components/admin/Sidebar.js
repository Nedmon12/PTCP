import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { UserOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import SidebarStyled from './SidebarStyled';

const { Title } = Typography;
const { Sider } = Layout;

function Sidebar({ collapsed, index, loggedInUserId }) {
  return (
    <div className='flex'>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={collapsed ? {padding: '1rem',
          fontsize:'0.9rem'}: {
          padding: '1rem 0rem 2rem 0px',
          fontsize: '1.875',
        }}
      >
        <div className="logo">
          <Title level={2}>MERN DASH</Title>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="sidebar-items h-96"
          defaultSelectedKeys={[index]}
        >
          <Menu.Item key="1" icon={<HomeOutlined />} className="ant-menu-item">
            <Link className="text-white" to="/dashboard">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} className="ant-menu-item">
            <Link className="text-white" to="/adminDashboard/schools">
              Users
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}className="ant-menu-item">
            <Link to={`/dashboard/user/${loggedInUserId}`}></Link>
            Account Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
      
  );
}

export default Sidebar;

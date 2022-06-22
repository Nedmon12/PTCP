import React from 'react';

//import CustomLoaderStyled from './CustomLoaderStyled';

const CustomLoader = ({ text }) => (
  <div
    style={{
      padding: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    
      <div className="spinner"></div>
    

    <div> {text ? text : 'Doing some background work..'}.</div>
  </div>
);

export default CustomLoader;

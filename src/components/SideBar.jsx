import React from 'react';
import '../styles/sidebar.css';

import UserInformation from './UserInformation'

const Sidebar = ({ visible }) => {

  return (
    <>
      <div className={`sidebar ${visible ? 'sidebar-visible' : ''}`}>
        <UserInformation />
      </div>
    </>
  );
};

export default Sidebar;

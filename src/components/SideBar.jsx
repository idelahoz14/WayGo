import React from 'react';
import '../styles/sidebar.css';

const Sidebar = ({ visible }) => {
  return (
    <div className={`sidebar ${visible ? 'sidebar-visible' : ''}`}>
      <p>¡Hola! Soy un sidebar.</p>
    </div>
  );
};

export default Sidebar;

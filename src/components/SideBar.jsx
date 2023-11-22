import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

// Styles
import '../styles/sidebar.css';

// Components
import UserInformation from './UserInformation'

const Sidebar = ({ visible }) => {

  return (
    <>
      <div className={`sidebar ${visible ? 'sidebar-visible' : ''}`}>
        <UserInformation />
        <li style={{marginTop: '2rem'}}>
          <Nav.Link as={Link} to="/"><strong>Inicio</strong></Nav.Link>
        </li>
        <li>
          <Nav.Link as={Link} to="/busroute"><strong>Rutas</strong></Nav.Link>
        </li>
        <li>
          <Nav.Link as={Link} to="/"><strong>Rastreo de buses</strong></Nav.Link>
        </li>
        <li>
          <Nav.Link as={Link} to="/traveltimecalculator"><strong>Tiempo de viaje</strong></Nav.Link>
        </li>
      </div>
    </>
  );
};

export default Sidebar;

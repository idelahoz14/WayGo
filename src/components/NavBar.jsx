import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import Sidebar from "./SideBar";

import 'bootstrap/dist/css/bootstrap.css';

// Styles
import '../styles/navbar.css'

// Components
import LogIn from "./Login";
import Registrate from "./Registrate";

// SVG
const hamburgerIcon = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
const userIcon = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>

const NavBar = () => {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <Router>
        <div className="container-header">
          <aside>
            <a className="toggle-btn" onClick={toggleSidebar}>
              {hamburgerIcon}
              {sidebarVisible}
            </a>
            <Sidebar visible={sidebarVisible} />
          </aside>
          <main>
            <Nav.Link as={Link} to="/"><h2>WayGo</h2></Nav.Link>
          </main>
          <aside>
            <Nav.Link as={Link} to="/login">{userIcon}</Nav.Link>
          </aside>
        </div>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<LogIn />} />
          <Route path="/registrate" element={<Registrate />} />
        </Routes>
      </Router>
    </>
  )
}

export default NavBar;
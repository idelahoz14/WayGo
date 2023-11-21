import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css'

// Components
import Login from "./Login";
import LogoutButton from "./Logout";
import Sidebar from "./SideBar";


// SVG
const hamburgerIcon = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>

const NavBar = () => {

  // Variables de estado
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Funcion para activar o desactiva el menu lateral
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

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
            {isAuthenticated ? (
              <>
                <LogoutButton />
              </>
            ) : (
              <Login />
            )
            }
          </aside>
        </div>
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  )
}

export default NavBar;
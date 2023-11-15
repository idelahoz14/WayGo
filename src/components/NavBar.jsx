import React from "react";

// Styles
import '../styles/navbar.css'

// SVG
const hamburgerIcon = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
const userIcon = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>

const NavBar = ({title}) => {
  return(
    <>
    <div className="container-header">
      <aside>
        <a href="">
          {hamburgerIcon}
        </a>
      </aside>
      <main>
        <h2>{title}</h2>
      </main>
      <aside>
      <a href="">
          {userIcon}
        </a>
      </aside>
    </div>
    </>
  )
}

export default NavBar;
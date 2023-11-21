import React from "react";

// Styles
import '../styles/searchroute.css'

const SearchRoute = () => {
  return (
    <>
      <div className="container-search">
        <input type="text" placeholder="Punto A" />
        <input type="text" placeholder="Punto B" />
        <input type="button" value="Buscar" />
      </div>
    </>
  )
}

export default SearchRoute;
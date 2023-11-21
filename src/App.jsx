import React from 'react'

// Styles
import './styles/app.css'

// Components
import NavBar from './components/NavBar'
import SearchRoute from './components/SearchRoute'
import Mapa from './components/Mapa'

function App() {
  return (
    <>
      <NavBar />
      <Mapa />
      <div className='asd'>
        <SearchRoute />
      </div>
    </>
  )
}

export default App

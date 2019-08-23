import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return(
    <div id="navbar">
      <span id="nav-logo">Trek Deck</span>
      <NavLink to="/" exact>
        <span id="exit" className="fas fa-hiking fa-2x"></span>
      </NavLink>
    </div>
  )
}

export default Navbar

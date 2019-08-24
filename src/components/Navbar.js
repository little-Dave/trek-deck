import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return(
    <div id="navbar">
      <span id="nav-logo">Trek Deck</span>
      <p id="nav-greeting">Hi {props.name}</p>
      <NavLink to="/" exact>
        <span id="exit" className="fas fa-hiking fa-2x"></span>
      </NavLink>
    </div>
  )
}

export default Navbar

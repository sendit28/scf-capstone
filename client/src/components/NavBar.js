import React from 'react'
import { Link } from "react-router-dom"

function NavBar({handleLogoutClick}) {

  return (
    <div className="nav-bar">
      <h1> Show and Tell </h1>
      <div>
        <Link to="/posts"> Posts </Link>
      </div>
      <div>
        <Link to="/posts/new"> Publish </Link>
      </div>
      <div>
        <Link to="/" onClick={handleLogoutClick}> Logout </Link>
      </div>
    </div>
  )
}

export default NavBar
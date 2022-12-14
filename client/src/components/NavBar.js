import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const linkStyle = {textDecoration: "none", color: "grey"}

function NavBar({handleLogoutClick}) {
 const navigate = useNavigate()
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Show and Tell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link style={linkStyle} to="/posts">Posts</Link></Nav.Link>
          <Nav.Link><Link style={linkStyle} to="/posts/new">Publish</Link></Nav.Link>
          <Nav.Link><Link style={linkStyle} to="/signup">Signup</Link></Nav.Link>
          <Nav.Link><Link style={linkStyle} to="/">Login</Link></Nav.Link>
          <Nav.Link><Link style={linkStyle} to="/" onClick={handleLogoutClick}>Logout</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

{/* <div className="nav-bar">
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
    </div> */}
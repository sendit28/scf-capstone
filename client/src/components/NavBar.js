import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({handleLogoutClick}) {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Show and Tell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link link to="/posts">Posts</Nav.Link>
            <Nav.Link href="/posts/new">Publish</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
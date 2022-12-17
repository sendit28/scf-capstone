import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const linkStyle = { textDecoration: "none", color: "grey" };

function NavBar({ handleLogoutClick }) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Show and Tell</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? <Nav.Link>
              <Link style={linkStyle} to="/posts">
                Posts
              </Link>
            </Nav.Link> : null}
            <Nav.Link>
              {user ? <Link style={linkStyle} to="/posts/new">
                Publish
              </Link> : null}
            </Nav.Link>
            {user ? null : (
              <Nav.Link>
                <Link style={linkStyle} to="/signup">
                  Signup
                </Link>
              </Nav.Link>
            )}
            {user ? null : (
              <Nav.Link>
                <Link style={linkStyle} to="/">
                  Login
                </Link>
              </Nav.Link>
            )}
            <Nav.Link>
              <Link style={linkStyle} to="/" onClick={handleLogoutClick}>
                Logout
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;



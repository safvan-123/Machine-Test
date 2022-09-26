import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { BsFillGrid3X2GapFill } from "react-icons/bs";
import "./Navbar.css";

function Head() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="brand" href="#home">
            StackRoot
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="togglebtn"
          />

          <Navbar.Collapse id="basic-navbar-nav" className="icon">
            <Nav className="ml-auto">
              <Link to="/register" className="active ml-4 nav-content">
                SignUp
              </Link>
              <Link to="/login" className="active ml-4 nav-content">
                SignIn
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Head;

import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        {/* Brand logo */}
        <Navbar.Brand href="#home">
          <img
            src="https://your-logo-url.com/logo.png" 
            alt="tezla Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>

        {/* Hamburger toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="About" id="home-solutions-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Home Inverter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                High Capacity Inverter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Inverter Battery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Long Lasting
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#solar" className="nav-item">
              Products
            </Nav.Link>

            <Nav.Link href="#mobility" className="nav-item">
              Dealer/Distributor
            </Nav.Link>

            <Nav.Link href="#automotive" className="nav-item">
              Customer Care
            </Nav.Link>

            <Nav.Link href="#shopping" className="nav-item">
              Contact
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

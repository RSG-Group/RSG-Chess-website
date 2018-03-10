import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router";

const NavbarComponent = () => (
  <Navbar fluid inverse collapseOnSelect staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <img id="brand-icon" src="/pictures/icon.png" />
          RSG Chess
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text>
        <Link to="/play">Play</Link>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarComponent;

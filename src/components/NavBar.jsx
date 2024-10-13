import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/">Fitness Tracker</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/exercises">Exercises</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;


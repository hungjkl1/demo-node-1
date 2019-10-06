import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Hùng</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default NavbarComponent;

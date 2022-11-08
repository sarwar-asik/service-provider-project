import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="" variant="">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold fs-1 text-muted '>SH TRAVEL SERVICE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Link className='btn btn-outline-primary my-1 mx-1' to={'/login'}>Log In </Link>
            <Link className='btn btn-outline-primary my-1 mx-1' to={'/signup'}>Sign Up </Link>
            <Link className='btn btn-outline-secondary my-1 mx-1' to={'/blogs'}>Blogs</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );
};

export default Headers;
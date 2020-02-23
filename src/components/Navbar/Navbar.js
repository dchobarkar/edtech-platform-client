import React from 'react';
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavBar = () => (
    <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="/">GaNeTy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link><Link to="/newtest">Create New test</Link></Nav.Link>
                <Nav.Link><Link to="/mytest">My Test</Link></Nav.Link>
                <NavDropdown title="Aditi Coaching Classes" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/id.profile">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/analytics">Analytics</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;
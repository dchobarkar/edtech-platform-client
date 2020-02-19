import React from 'react';
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'

const NavBar = () => (
    <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="/">GaNeTy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/createnewtest">Create New test</Nav.Link>
                <Nav.Link href="/mytest">My Test</Nav.Link>
                <NavDropdown title="Aditi Coaching Classes" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/id.profile">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/analytics">Analytics</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;
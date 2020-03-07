import React from 'react';
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => (
    <Navbar bg="dark" variant="dark" expand="md">
        <Link to="/">
            <Navbar.Brand>GaNeTy</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/services">
                    <Navbar.Brand>Services</Navbar.Brand>
                </Link>
                <Link to="/contactus">
                    <Navbar.Brand>Contact Us</Navbar.Brand>
                </Link>
                <Link to="/about">
                    <Navbar.Brand>About</Navbar.Brand>
                </Link>
                <NavDropdown title="Aditi Coaching Classes" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/myprofile">My Profile</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/mycourse">My Course</Link></NavDropdown.Item>
                    <NavDropdown.Item>Analytics</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>

                <Link to="/login">
                    <Navbar.Brand>Login</Navbar.Brand>
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;
import React from 'react';
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navbar.css';

const NavBar = () => (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
        <Link to="/">
            <Navbar.Brand>
                <i className="fab fa-glide-g"></i>
                GaNeTy
            </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

                <Link to="/services">
                    <Navbar.Text id="navmenucolor" className="p-2">Sevices</Navbar.Text>
                </Link>

                <Link to="/contactus">
                    <Navbar.Text id="navmenucolor" className="p-2">Contact Us</Navbar.Text>
                </Link>

                <Link to="/about" >
                    <Navbar.Text id="navmenucolor" className="p-2">About</Navbar.Text>
                </Link>

                <NavDropdown title="Tutionsname" id="basic-nav-dropdown">
                    <NavDropdown.Item ><Link to="/myprofile" id="dropdownitem">My Profile</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/mycourse" id="dropdownitem">My Course</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/analytics" id="dropdownitem">Analytics</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item ><Link to="/logout" id="dropdownitem">Logout</Link></NavDropdown.Item>
                </NavDropdown>

                <Link to="/login">
                    <Navbar.Text id="navmenucolor" className="p-2">Login</Navbar.Text>
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;
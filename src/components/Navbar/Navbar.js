import React from 'react';
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navbar.css';

const NavBar = () => (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Link to="/">
            <Navbar.Brand id="link">
                <i className="fab fa-glide-g"></i>
                GaNeTy
            </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#"><Link id="link" to="/services">Services</Link></Nav.Link>
                <Nav.Link href="#"><Link id="link" to="/contactus">Contact Us</Link></Nav.Link>
                <Nav.Link href="#"><Link id="link" to="/about">About</Link></Nav.Link>

                <NavDropdown title="Tutionsname" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#" ><Link id="link" id="dropdownitem" to="/myprofile">My Profile</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#"><Link id="link" id="dropdownitem" to="/mycourse">My Course</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#"><Link id="link" id="dropdownitem" to="/analytics">Analytics</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#"><Link id="link" id="dropdownitem" to="/logout">Logout</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#"><Link id="link" to="/login">Login</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;
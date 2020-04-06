import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';

import './Navbar.css';

class NavBar extends Component {

    nextPage = (path) => {
        this.props.history.push(path)
    }

    render() {
        let authenticated =
            <NavDropdown title="Tutionsname" id="collasible-nav-dropdown">
                <Nav.Link onSelect={() => this.nextPage("/myprofile")} href="#4" className="nav-link dropdownitem" >My Profile</Nav.Link>
                <Nav.Link onSelect={() => this.nextPage("/mycourse")} href="#5" className="nav-link dropdownitem" >My Course</Nav.Link>
                <Nav.Link onSelect={() => this.nextPage("/analytics")} href="#6" className="nav-link dropdownitem">Analytics</Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link onSelect={() => this.nextPage("/logout")} href="#7" className="nav-link dropdownitem">Logout</Nav.Link>
            </NavDropdown>

        if (!localStorage.authkey) {
            authenticated =
                <Nav.Link onSelect={() => this.nextPage("/login")} href="#8" className="nav-link" >Login</Nav.Link>
        }

        return (
            <Navbar collapseOnSelect className="ganety_navbar" expand="md" >
                <Navbar.Brand >
                    <NavLink className="nav-link" to="/">
                        <i className="fab fa-glide-g"></i>GaNeTy
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link onSelect={() => this.nextPage("/services")} href="#1" className="nav-link">Services</Nav.Link>
                        <Nav.Link onSelect={() => this.nextPage("/contactus")} href="#2" className="nav-link">Contact Us</Nav.Link>
                        <Nav.Link onSelect={() => this.nextPage("/about")} href="#3" className="nav-link">About</Nav.Link>

                        {authenticated}

                    </Nav>

                </Navbar.Collapse >
            </Navbar >)
    }
}

export default withRouter(NavBar);
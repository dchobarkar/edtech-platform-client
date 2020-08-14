import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';

import './Navbar.css';

const NavBar = React.memo(function NavBar(props) {
    // Function for routing path
    const nextPage = (path) => {
        props.history.push(path)
    }

    // Routes tobe shown in navbar according to the authentication status
    let authenticated =
        localStorage.authKey ?
            <NavDropdown title="Tutionsname" id="userfunctions-dropdown">
                <Nav.Link
                    href="#"
                    className="nav-link dropdownitem"
                    onSelect={() => nextPage("/classprofile")}>
                    Class Profile
                </Nav.Link>
                <Nav.Link
                    href="#"
                    className="nav-link dropdownitem"
                    onSelect={() => nextPage("/mycourse")}>
                    My Course
                </Nav.Link>
                <Nav.Link
                    href="#"
                    className="nav-link dropdownitem"
                    onSelect={() => nextPage("/analytics")}>
                    Analytics
                </Nav.Link>

                <NavDropdown.Divider />

                <Nav.Link
                    href="#"
                    className="nav-link dropdownitem"
                    onSelect={() => nextPage("/logout")}>
                    Logout
                </Nav.Link>
            </NavDropdown>
            : <Nav.Link
                href="#"
                className="nav-link"
                onSelect={() => nextPage("/login")}>
                Login
            </Nav.Link>

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
                    <Nav.Link
                        href="#"
                        className="nav-link"
                        onSelect={() => nextPage("/services")}>
                        Services
                    </Nav.Link>
                    <Nav.Link
                        href="#"
                        className="nav-link"
                        onSelect={() => nextPage("/contactus")}>
                        Contact Us
                    </Nav.Link>
                    <Nav.Link
                        href="#"
                        className="nav-link"
                        onSelect={() => nextPage("/about")}>
                        About
                    </Nav.Link>

                    {authenticated}

                </Nav>
            </Navbar.Collapse >
        </Navbar >
    )
})

export default withRouter(NavBar);
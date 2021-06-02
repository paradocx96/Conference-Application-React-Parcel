// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

class NavigationBar extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Link to={'/'} className={'navbar-brand'}>ICAF - 2021</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to={'/keynotes'} className={'nav-link'} >Keynotes</Link>
                            <Link to={'/news'} className={'nav-link'} >News</Link>
                            <Link to={'/workshop'} className={'nav-link'} >Workshop</Link>
                            <Link to={'/research'} className={'nav-link'} >Research</Link>
                            <NavDropdown title="Authors" id="collasible-nav-dropdown">
                                <Link to={'/research'} className={'dropdown-item'}>Research</Link>
                                <NavDropdown.Divider/>
                                <Link to={'/downloads'} className={'dropdown-item'}>Downloads</Link>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link to={'/contactus'} className={'nav-link'} >Contact Us</Link>
                            <Link to={'/sign-in'} className={'nav-link'} >Sign in</Link>
                            <NavDropdown title="" id="collasible-nav-dropdown">
                                <Link to={'/dashboard'} className={'dropdown-item'}>Dashboard</Link>
                                <NavDropdown.Divider/>
                                <Link to={'/sign-out'} className={'dropdown-item'}>Sign Out</Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;
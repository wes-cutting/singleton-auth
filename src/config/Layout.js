import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import './layout.css'

class Layout extends Component {
    render() {
        return (
            <div className="site">
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand>
                        <Link to='/'>
                            Template
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>
                                
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown className="float-right" title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to='/entry'>
                                        Entry
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="centered content">
                    <div>{this.props.children}</div>
                </div>
                <footer className="centered theme">Thanks for stopping by!</footer>
            </div>
        );
    }
}

export default Layout;
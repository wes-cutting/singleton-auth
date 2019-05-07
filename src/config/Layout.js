import React, { useState } from 'react';
import {  
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Navbar, 
    NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom'
import './layout.css'

const Layout = ({children}) => {
    let [collapsed, setCollapsed] = useState(true)
    return (
        <div className="site">
            <Navbar className='theme' dark>
                <Link to="/" className="mr-auto navbar-brand">Template</Link>
                <Dropdown isOpen={!collapsed} toggle={() => setCollapsed(!collapsed)} direction='left' >
                    <DropdownToggle
                        tag="span"
                        onClick={() => setCollapsed(!collapsed)}
                        data-toggle="dropdown"
                        aria-expanded={collapsed}>
                        <NavbarToggler className="mr-2"/>
                    </DropdownToggle>
                    <DropdownMenu className='dropMenu'>
                        <div onClick={() => setCollapsed(!collapsed)}>
                            <Link className='navLink' to='/'>
                                Home
                            </Link>
                        </div>
                        <DropdownItem divider />
                        <div onClick={() => setCollapsed(!collapsed)}>
                            <Link className='navLink' to='/entry'>
                                Entry
                            </Link>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </Navbar>
            <div className="centered content">
                <div>{children}</div>
            </div>
            <footer className="centered theme">Thanks for stopping by!</footer>
        </div>
    )
}

// class LayoutOld extends Component {
//     render() {
//         return (
//             <div className="site">
//                 <Navbar bg="dark" expand="lg" variant="dark">
//                     <NavbarBrand>
//                         <Link to='/'>
//                             Template
//                         </Link>
//                     </NavbarBrand>
//                     <Collapse id="basic-navbar-nav">
//                         <Nav className="mr-auto">
//                         </Nav>
//                         <Nav className="float-right">
//                             <UncontrolledDropdown className="float-right" title="Dropdown" id="basic-nav-dropdown">
//                                 <Link className='navLink' to='/'>
//                                     Home
//                                 </Link>
//                                 <DropdownItem divider/>
//                                 <Link className='navLink' to='/entry'>
//                                     Entry
//                                 </Link>
//                             </UncontrolledDropdown>
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//                 <div className="centered content">
//                     <div>{this.props.children}</div>
//                 </div>
//                 <footer className="centered theme">Thanks for stopping by!</footer>
//             </div>
//         );
//     }
// }

export default Layout;
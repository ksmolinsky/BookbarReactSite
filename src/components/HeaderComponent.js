import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, Jumbotron, Collapse } from 'reactstrap';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2 ml-3">
                                <a href="/home"><img src="/assets/logo.jpg" className="img-fluid" height="150" width="150"/></a>
                            </div>
                            <div className="col-sm-5 my-auto ml-4">
                                <h1 className="title">Kyle's Bookbar</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg"/> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <i className="fa fa-info fa-lg"/> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/restaurant">
                                    <i className="fa fa-cutlery fa-lg"/> Restaurant 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/events">
                                    <i className="fa fa-calendar-o fa-lg"/> Events
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/shop">
                                    <i className="fa fa-calendar-o fa-lg"/> Shop
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
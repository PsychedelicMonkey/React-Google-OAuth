import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logout from './auth/Logout';

class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    const { isAuthenticated, isLoading, user } = this.props.auth;
    
    return (
      <Navbar color="light" light expand="md" fixed="top">
        <Container>
          <NavbarBrand tag={Link} to="/">Blog</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              { isAuthenticated ? (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>{user.firstName}</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>My Posts</DropdownItem>
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem divider />
                    <Logout />
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <NavItem>
                  <NavLink tag={Link} to="/auth/login">Log In</NavLink>
                </NavItem>
              ) }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AppNavbar);

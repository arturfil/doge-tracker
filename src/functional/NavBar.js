import React from "react";
import {
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
  NavbarText,
} from "reactstrap";

const NavBar = () => {
  let colorStl = {
    backgroundColor: "rgb(15, 11, 34)",
    color: "lightgrey"
  }

  return (
    <div>
      <Navbar style={colorStl} dark expand="md">
        <div className="container">
          <NavbarBrand href="/">
            <img style={{width: '80px', height: 'auto'}} src="./img/test.png" />
          </NavbarBrand>
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink style={{color: "white"}} href="/components/">
                  <h4>DogeCoin Tracker</h4>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;

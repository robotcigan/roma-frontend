'use strict';

import React from 'react';
import {Navbar, NavbarBrand, Collapse, Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const RNavBar = () => {
  return (
    <div>
      <Navbar color="faded" toggleable light>
        <NavbarBrand href="/app">
          App
        </NavbarBrand>
        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <Link className="nav-link" to="/admin/test" >Test</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/admin/add-project">Add project</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default RNavBar;
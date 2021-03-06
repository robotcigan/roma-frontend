'use strict';

import React from 'react';
import {Navbar, NavbarBrand, Collapse, Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const RNavBar = () => {
  return (
    <div>
      <Navbar color="faded" toggleable light>
        <div className="container">
          <NavbarBrand href="/app">
            App
          </NavbarBrand>
          <Collapse navbar>
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" to="/admin" >Проекты</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/admin/add-project">Новый проект</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default RNavBar;
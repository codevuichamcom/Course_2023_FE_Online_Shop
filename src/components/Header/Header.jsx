import React, { useState } from "react";
import {
  Button,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="Header">
      <Container>
        <Navbar expand="xl" light>
          <NavbarBrand href="/">
            <img src="/img/logo.png" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Pages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact</NavLink>
              </NavItem>
            </Nav>
            <Nav className="d-flex align-items-center Header__actions">
              <NavItem className="Header__actions__search">
                <FontAwesomeIcon icon={faSearch} />
              </NavItem>
              <NavItem className="Header__actions__cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavItem>
              <NavItem className="Header__actions__buy">
                <Button color="primary" outline>
                  Buy Now
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;

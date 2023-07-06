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

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      <Container>
        <Navbar expand="xl" light>
          <NavbarBrand href="/">
            <img src="/img/logo.png" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto me-auto" navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/shop-category">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
            <Nav className="d-flex align-items-center Header__actions">
              <NavItem className="header__actions__search">
                <FontAwesomeIcon icon={faSearch} />
              </NavItem>
              <NavItem className="header__actions__cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavItem>
              <NavItem className="header__actions__buy">
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

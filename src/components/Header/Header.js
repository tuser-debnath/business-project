import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import LogoTwo from "../LogoTwo/LogoTwo";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Header.css";
import auth from "../../../../business-project/src/firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  // Sign Out
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className="header-area">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <LogoTwo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/service" className="nav-link">
                Services
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
              {user ? (
                <NavLink className="nav-link" onClick={handleSignOut}>
                  Sign Out
                </NavLink>
              ) : (
                <NavLink to="/signin" className="nav-link sign-in-button">
                  Sign In
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Link } from "react-router-dom";
import auth from "../../firebase.init";
import Logo from "../Logo/Logo";
import "./HeaderTwo.css";

const HeaderTwo = () => {
  const [user] = useAuthState(auth);
  // Sign Out
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className="header-two-area">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Logo />
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

export default HeaderTwo;

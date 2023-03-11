import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import LogoTwo from "../LogoTwo/LogoTwo";
import SocialMedia from "./../SocialMedia/SocialMedia";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <div className="footer-top-content">
                <LogoTwo />
                <p>
                  We create a hybrid web design, development, content, SEO, PPC
                  management, and advertising strategy for clients.
                </p>
                <SocialMedia />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <p>© 2023 RoseTheme , All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

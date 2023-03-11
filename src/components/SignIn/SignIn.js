import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import auth from "../../../../business-project/src/firebase.init";
import "./SignIn.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SectionHeading from "../SectionHeading/SectionHeading";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const messageDiv = document.getElementById("message-div");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (error) {
    messageDiv.innerHTML = "Error";
  }
  if (loading) {
    messageDiv.innerHTML = "Loading....";
  }
  if (user) {
    messageDiv.innerHTML = "Sign In Successfull";
  }
  return (
    <section className="signin-area">
      <SectionHeading section_heading_heading="Please Sign In Here" />
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="signin-content">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <div id="message-div" className="error-text text-danger"></div>
              <h3>
                New User ?{" "}
                <NavLink to="/reg" className="nav-link signin-link">
                  Registration Here
                </NavLink>
              </h3>
              <Button
                className="another-button"
                variant="primary"
                type="submit"
                onClick={() => signInWithEmailAndPassword(email, password)}
              >
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;

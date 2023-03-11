import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import auth from "../../../../business-project/src/firebase.init";
import "./Registration.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SectionHeading from "../SectionHeading/SectionHeading";
import { NavLink } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const messageDiv = document.getElementById("message-div");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (error) {
    messageDiv.innerHTML = "Error";
  }
  if (loading) {
    messageDiv.innerHTML = "Loading....";
  }
  if (user) {
    messageDiv.innerHTML = "User Registered";
  }
  return (
    <section className="registration-area">
      <SectionHeading section_heading_heading="Please Registration Here" />
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="registration-content">
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
              <div id="message-div" className="text-danger"></div>
              <h3>
                Already Have an Account ?
                <NavLink to="/signin" className="nav-link reg-link">
                  Sign In Here
                </NavLink>
              </h3>
              <Button
                className="another-button w-100 mb-3"
                variant="primary"
                type="submit"
                onClick={() => createUserWithEmailAndPassword(email, password)}
              >
                Submit
              </Button>
              <span className="or-style">or</span>
              <GoogleSignIn />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;

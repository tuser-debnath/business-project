import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Success.css";

const Success = () => {
  return (
    <section className="success-area">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div class="single-success">
              <h3>20+</h3>
              <h4>Satisfied Client</h4>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div class="single-success">
              <h3>2500</h3>
              <h4>Hours of Works</h4>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div class="single-success">
              <h3>15+</h3>
              <h4>Project Done</h4>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div class="single-success">
              <h3>5+</h3>
              <h4>Project Running</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Success;

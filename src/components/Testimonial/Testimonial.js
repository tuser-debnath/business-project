import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial-area">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div class="testimonial-text">
              <i class="fa-solid fa-quote-left"></i>
              <h3>
                Very quick turn around, highly efficient with the website design
                and the functionality. He was able to understand how I wanted my
                website to work and deliver good results in a short time frame.
                I recommend!
              </h3>
              <h4>- Biswajit Adhikary</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;

import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ThemeButton from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-area">
      <SectionHeading
        section_heading_heading="Contact Us"
        section_heading_text="Feel free to contact us to request a quote or to schedule a consultation with our team."
      />
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={4}>
            <div className="contact-more">
              <div className="single-contact">
                <h3>Location</h3>
                <h4>
                  <span>USA:</span> 1952 NE 49th Street , Pompano Beach,FL 33064
                </h4>
                <h4>
                  <span>Bangladesh:</span> Twin Tower, House-100, (Level-100),
                  Main Road Block- Z, Dhaka
                </h4>
              </div>
              <div className="single-contact">
                <h3>Contact Us</h3>
                <h4>
                  <span>Telephone USA:</span> +1(954) 500-0000
                </h4>
                <h4>
                  <span>Email USA:</span> test@rosetheme.com
                </h4>
              </div>
            </div>
          </Col>
          <Col lg={8} md={{ span: 12, offset: 0 }}>
            <div className="contact-form">
              <input
                type="text"
                placeholder="First Name"
                className="form-control mb-3"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control mb-3"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="form-control mb-3"
              />
              <textarea
                class="form-control"
                placeholder="Your Message"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <ThemeButton button="Submit Now" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

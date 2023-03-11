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
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 12, offset: 0 }}>
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

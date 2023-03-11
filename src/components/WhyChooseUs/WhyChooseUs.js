import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-area">
      <SectionHeading
        section_heading_heading="Why Choose Us"
        section_heading_text="We are committed to delivering industry-leading IT, Software & Digital marketing solutions offering competitive pricing"
      />
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <div className="single-choose">
              <h3>We meet deadlines</h3>
              <p>
                We've streamlined our processes to eliminate the biggest
                hurdle—meeting project deadlines—which helps us.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="single-choose">
              <h3>Enhancing ideas</h3>
              <p>
                Creativity is the result of imagination, which helps eliminate
                to ensure a positive contribution in your ideas.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="single-choose">
              <h3>Our think tank</h3>
              <p>
                We approach everything with the idea that we can make it better.
                We don't think in eliminate there is a box.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

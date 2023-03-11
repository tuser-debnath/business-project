import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./SectionHeading.css";

const SectionHeading = (props) => {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 10, offset: 1 }}>
          <div className="section-heading">
            <h3>{props.section_heading_heading}</h3>
            <p>{props.section_heading_text}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionHeading;

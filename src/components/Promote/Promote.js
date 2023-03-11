import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Promote.css";

const Promote = (props) => {
  return (
    <section className="promote-area">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="promote-content">
              <h2>{props.promote}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Promote;

import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import MissionImage from "../../image/mission.jpg";
import VisionImage from "../../image/vision.jpg";
import "./MissionVision.css";
import ThemeButton from "../Button/Button";

const MissionVision = () => {
  return (
    <section className="mission-vision-area">
      <SectionHeading
        section_heading_heading="Our Goal"
        section_heading_text="We value creativity and innovation, as well as professionalism and responsibility."
      />
      <Container>
        <Row>
          <Col lg={6} md={6}>
            <div className="single-goal">
              <img src={MissionImage} alt=""></img>
              <h3>Our Mission</h3>
              <p>
                We want to bring the benefits of information technology to all
                businesses. To inspire innovation that would make enterprises
                sustainable. Empower businesses by delivering high-quality
                software solutions. Our mission is to help businesses grow by
                driving innovation and increasing agility. We generate solutions
                that help businesses innovate, scale and thrive for years.
              </p>
              <ThemeButton button="Read More" />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="single-goal">
              <img src={VisionImage} alt=""></img>
              <h3>Our Vision</h3>
              <p>
                We want to bring the benefits of information technology to all
                businesses. To inspire innovation that would make enterprises
                sustainable. Empower businesses by delivering high-quality
                software solutions. Our mission is to help businesses grow by
                driving innovation and increasing agility. We generate solutions
                that help businesses innovate, scale and thrive for years.
              </p>
              <ThemeButton button="Read More" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MissionVision;

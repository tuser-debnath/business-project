import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import AboutWhoWeAreImage from "../../image/about-who-we-are.jpg";
import "./WhoWeAre.css";
import ThemeButton from "../Button/Button";

const WhoWeAre = () => {
  return (
    <section className="about-who-we-area-area">
      <SectionHeading
        section_heading_heading="About Us"
        section_heading_text="We create a hybrid web design, development, content, SEO, PPC management, and advertising strategy for clients."
      />
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={{ span: 6, offset: 0 }} md={{ span: 10, offset: 1 }}>
            <div className="who-we-are-image">
              <img className="w-100" src={AboutWhoWeAreImage} alt=""></img>
            </div>
          </Col>
          <Col lg={{ span: 6, offset: 0 }} md={{ span: 10, offset: 1 }}>
            <div className="who-we-are-content">
              <h2>We Are RoseTheme</h2>
              <p>
                RoseTheme, a top-notch IT company in Bangladesh, specializes in
                web development, e-commerce solutions, content development, and
                digital marketing. <br />
                Our team has a range of skills and experience. We can build you
                an MVP and provide web apps and digital marketing, including
                content & design.
              </p>
              <p className="mb-0">
                We bring a set of unique skills and experience to every business
                we help launch. We'll take care of the groundwork so you can
                focus on growing your business.
              </p>
              <ThemeButton button="Learn More" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhoWeAre;

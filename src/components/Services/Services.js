import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Services.css";
import { useEffect, useState } from "react";
import AllServices from "../AllServices/AllServices";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section className="services-area">
      <SectionHeading
        section_heading_heading="Our Services"
        section_heading_text="We offer a wide range of digital related experts in design services for small and large businesses."
      />
      <Container>
        <Row>
          {service.map((item) => (
            <AllServices key={item.id} item={item} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

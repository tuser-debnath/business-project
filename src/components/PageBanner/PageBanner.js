import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./PageBanner.css";

const PageBanner = (props) => {
  return (
    <section className="page-banner">
      <Container>
        <h2>{props.pagebanner}</h2>
      </Container>
    </section>
  );
};

export default PageBanner;

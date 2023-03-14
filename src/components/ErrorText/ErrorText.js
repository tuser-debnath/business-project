import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./ErrorText.css";

const ErrorText = () => {
  return (
    <section className="error-area">
      <Container>
        <div className="error-text">
          <h2>404</h2>
          <h3>Page Not Found</h3>
          <h4>The page you're looking does not seem to exist</h4>
        </div>
      </Container>
    </section>
  );
};

export default ErrorText;

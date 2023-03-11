import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./AllServices.css";

const AllServices = ({ item }) => {
  return (
    <Col lg={4} md={6}>
      <div className="single-service">
        <img src={item.img} alt=""></img>
        <h3>{item.heading}</h3>
        <p>{item.subtext}</p>
        <button href="">{item.button}</button>
      </div>
    </Col>
  );
};

export default AllServices;

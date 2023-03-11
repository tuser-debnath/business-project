import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./MoreBlogs.css";

const MoreBlogs = ({ item }) => {
  return (
    <Col lg={6}>
      <div className="more-single-blog">
        <img src={item.img} alt=""></img>
        <h2>{item.heading}</h2>
      </div>
    </Col>
  );
};

export default MoreBlogs;

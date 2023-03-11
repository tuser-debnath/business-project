import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./AllBlogs.css";

const AllBlogs = ({ item }) => {
  return (
    <Col lg={6}>
      <div className="single-blog">
        <h4>{item.subtext}</h4>
        <h2>{item.heading}</h2>
        <p>{item.text}</p>
        <button href="">{item.name}</button>
      </div>
    </Col>
  );
};

export default AllBlogs;

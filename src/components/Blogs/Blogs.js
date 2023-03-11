import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Blogs.css";
import { useEffect, useState } from "react";
import AllBlogs from "../AllBlogs/AllBlogs";
import MoreBlogs from "../MoreBlogs/MoreBlogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const [moreBlogs, setMoreBlogs] = useState([]);
  useEffect(() => {
    fetch("more-blog.json")
      .then((resp) => resp.json())
      .then((dataa) => setMoreBlogs(dataa));
  }, []);
  return (
    <section className="blog-area">
      <SectionHeading
        section_heading_heading="Our Blogs"
        section_heading_text="Expand your SEO and marketing knowledge with
        detailed tutorials and case studies."
      />
      <Container>
        <Row>
          {blogs.map((item) => (
            <AllBlogs key={item.id} item={item} />
          ))}
        </Row>
        <div className="more-blogs-area">
          <h2 className="rosetheme-more-text">RoseTheme Latest</h2>
          <Row>
            {moreBlogs.map((item) => (
              <MoreBlogs key={item.id} item={item} />
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;

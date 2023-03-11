import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Banner/Banner.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const Banner = () => {
  const [singleBanner, setSingleBanner] = useState([]);
  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setSingleBanner(data));
  }, []);

  return (
    <section className="banner-area">
      <Carousel>
        {singleBanner.map((item) => (
          <Carousel.Item>
            <img className="d-block w-100" src={item.img} alt="First slide" />
            <Carousel.Caption>
              <h2>{item.heading}</h2>
              <p>{item.text}</p>
              <Button className="banner-button">{item.button}</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;

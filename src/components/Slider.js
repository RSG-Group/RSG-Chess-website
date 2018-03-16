import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => (
  <Carousel id="home-slider" controls={false} interval={3500}>
    {[1, 2, 3, 4, 5].map(ev => (
      <Carousel.Item key={ev}>
        <img
          src={`/pictures/slide${ev}.png`}
          alt="This promo graphic cannot be displayed."
        />
      </Carousel.Item>
    ))}
  </Carousel>
);

export default Slider;

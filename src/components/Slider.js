import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => (
  <Carousel controls={false} interval={2500}>
    <Carousel.Item>
      <img src="/pictures/slider1.png" alt="This promo graphic cannot be displayed."/>
    </Carousel.Item>
    <Carousel.Item>
      <img src="/pictures/slider1.png" alt="This promo graphic cannot be displayed."/>
    </Carousel.Item>
    <Carousel.Item>
      <img src="/pictures/slider1.png" alt="This promo graphic cannot be displayed."/>
    </Carousel.Item>
  </Carousel>
);

export default Slider;

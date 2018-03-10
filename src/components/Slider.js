import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => (
  <Carousel id="home-slider" controls={false} interval={2500}>
    <Carousel.Item>
      <img src="/pictures/slide1.png" alt="This promo graphic cannot be displayed."/>
    </Carousel.Item>
    <Carousel.Item>
      <img src="/pictures/slide2.png" alt="This promo graphic cannot be displayed."/>
    </Carousel.Item>
    <Carousel.Item>
      <img src="/pictures/slide3.png" alt="This promo graphic cannot be displayed."/>
    </Carousel.Item>
    <Carousel.Item>
      <img src="/pictures/slide4.png" alt="This promo graphic cannot be displayed."/>
    </Carousel.Item>
    <Carousel.Item>
      <img src="/pictures/slide5.png" alt="This promo graphic cannot be displayed."/>
    </Carousel.Item>
  </Carousel>
);

export default Slider;

import React from "react";
import { Carousel } from "react-bootstrap";
import RouteLink from "./RouteLink";
import { sliderStructure } from "../websiteConfig";

const Slider = () => (
  <Carousel id="home-slider" controls={false} interval={3500}>
    {sliderStructure.map((ev, i) => (
      <Carousel.Item key={i}>
        <RouteLink href={ev.href}>
          <img src={ev.src} alt="This promo graphic cannot be displayed." />
        </RouteLink>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default Slider;

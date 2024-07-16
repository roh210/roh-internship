import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SlickerArrow from "./SlickerArrow";

const sliderSettings = {
  accessibility: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: (
    <SlickerArrow
      to="next"
      arrowType={
        <FaChevronRight className="arrows" style={{ color: "black" }} />
      }
    />
  ),
  prevArrow: (
    <SlickerArrow
      to="prev"
      arrowType={
        <FaChevronLeft className="arrows" style={{ color: "black" }} />
      }
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
// Export the slider settings object
export default sliderSettings;

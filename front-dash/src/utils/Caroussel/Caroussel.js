import React from "react";
import classes from "./Caroussel.css";
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

const Caroussel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className={classes.xx}>xxx</div>
      <div className={classes.xx}>xxx</div>
      <div className={classes.xx}>xxx</div>
      <div className={classes.xx}>xxx</div>
      <div className={classes.xx}>xxx</div>
    </Slider>
  );
};

export default Caroussel;

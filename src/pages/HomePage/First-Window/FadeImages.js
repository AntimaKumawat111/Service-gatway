import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Fade() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container min-h-[90vh]">
      <Slider {...settings}>
        <div>
          <img
            src="https://probid-nextjs.vercel.app/assets/img/home5/home5-banner-img3.jpg"
            alt="Abstract 1"
            className="w-full min-h-[95vh] object-cover brightness-50"
          />
        </div>
        <div>
          <img
            src="https://probid-nextjs.vercel.app/assets/img/home5/home5-banner-img1.jpg"
            alt="Abstract 2"
            className="w-full min-h-[95vh] object-cover brightness-50"
          />
        </div>
        <div>
          <img
            src="https://probid-nextjs.vercel.app/assets/img/home5/home5-banner-img2.jpg"
            alt="Abstract 3"
            className="w-full min-h-[95vh] object-cover  brightness-50"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
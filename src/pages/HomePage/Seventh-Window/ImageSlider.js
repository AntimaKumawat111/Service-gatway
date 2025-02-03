import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";

function ImageSlider() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Jab screen width 1024px ya kam hogi
        settings: {
          slidesToShow: 4, // 2 slides dikhao
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Jab screen width 768px ya kam hogi
        settings: {
          slidesToShow: 3, // 1 slide dikhao
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Jab screen width 768px ya kam hogi
        settings: {
          slidesToShow: 3, // 1 slide dikhao
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500, // Jab screen width 768px ya kam hogi
        settings: {
          slidesToShow: 2, // 1 slide dikhao
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400, // Jab screen width 768px ya kam hogi
        settings: {
          slidesToShow: 1, // 1 slide dikhao
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="h-14 items-center">
      <Slider {...settings}>
        <div>
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-01.png"
            }
          />
        </div>
        <div>
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-02.png"
            }
          />
        </div>
        <div>
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-03.png"
            }
          />
        </div>
        <div>
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-04.png"
            }
          />
        </div>
        <div>
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-05.png"
            }
          />
        </div>
        <div>
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-06.png"
            }
          />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;

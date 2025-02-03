import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// local modules
import MovingCards from "./movingCard";

function ActiveModeSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-auto">
      <Slider {...settings}>
        <div className="h-auto">
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img1.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className="h-auto">
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img2.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>

        <div className="h-auto">
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img3.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className="h-auto">
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img4.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className=" h-auto">
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img5.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className=" h-auto">
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img6.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        {/* watch  */}
        <div className=" h-auto">
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img11.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className=" h-auto">
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img12.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>

        {/* game */}
        <div className=" h-auto">
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img13.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className=" h-auto">
          {/* <h3>1</h3> */}
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img14.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
      </Slider>
    </div>
  );
}

export default ActiveModeSlider;

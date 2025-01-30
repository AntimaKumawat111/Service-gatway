import React from "react";
import Slider from "react-slick";

// import "../App.css";

// local modules
import MovingCards from "./movingCard";

function ActiveModeSlider() {
  var settings = {
    dots: false,
    infinite: true, // इसे true करें
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000, // स्लाइड कितने सेकंड बाद मूव होगी

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true, // इसे भी true करें
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
    <div className="first-box w-[90vw] m-auto ">
      <Slider {...settings}>
        <div className="card h-auto ">
          {/* <h3>1</h3> */}
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img1.png"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className="card h-auto">
          {/* <h3>1</h3> */}
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img2.png"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>

        <div className="card h-auto">
          {/* <h3>1</h3> */}
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img3.png"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className="card h-auto ">
          {/* <h3>1</h3> */}
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/auction-img4.jpg"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className="card h-auto ">
          {/* <h3>1</h3> */}
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img5.png"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className="card h-auto ">
          {/* <h3>1</h3> */}
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img6.png"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>

        <div className="card h-auto ">
          {/* <h3>1</h3> */}
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img7.png"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className="card h-auto ">
          {/* <h3>1</h3> */}
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img8.png"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
        <div className="card h-auto">
          {/* <h3>1</h3> */}
          <MovingCards
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img9.png"
            }
            name={"MasterPiece Masterplace Art Auction Extra"}
          />
        </div>
      </Slider>
    </div>
  );
}

export default ActiveModeSlider;

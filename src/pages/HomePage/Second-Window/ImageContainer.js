import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
// import "../../../../App.css"; // Importing animation effects

import "../../../App.css";
const CenterModeSlider = () => {
  const settings = {
    centerMode: false,
    // horizontialSwiping:true,
    swipe: true,
    touchMove: true,
    centerPadding: "60px", // Space around the center item
    slidesToShow: 3, // Number of slides to show
    infinite: true, // Loop slides
    speed: 500, // Transition speed in ms
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Auto-slide delay
    pauseOnHover: true,
    dots: false, // Disable default dots
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          vertical: true,
          verticalSwiping: true,
          autoplay: false,
          slidesToShow: 3,
          centerPadding: "20px",
          centerMode: false,
        },
      },
    ],
  };

  // Example data for slider items
  const sliderItems = [
    {
      img: "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc041fffc/images/Sonata/Catalog/SP80062KM01W_1.jpg?sw=600&sh=600",
      name: "MasterPiece Masterplace Art Auction Extra",
      price: "19.99",
    },
    {
      img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg",
      name: "MasterPiece Masterplace Art Auction Extra",
      price: "29.99",
    },
    {
      img: "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7111545d/images/Sonata/Catalog/77105SL11_1.jpg?sw=600&sh=600",
      name: "MasterPiece Masterplace Art Auction Extra",
      price: "39.99",
    },
    {
      img: "https://media.gettyimages.com/id/603258691/photo/mens-wristwatch-being-held-in-a-watch-shop.jpg?s=612x612&w=gi&k=20&c=mb_aC7fWBZ_O6lEradF6eDUtF4xUeeOZQQqToSr6Gdo=",
      name: "MasterPiece Masterplace Art Auction Extra",
      price: "49.99",
    },
    {
      img: "https://media.istockphoto.com/id/533714204/photo/businessman-checking-time-from-watch.jpg?s=612x612&w=0&k=20&c=bJN94WW68Rw8uEogp3GKtBYnhcrNFNnf1SkWb0KDvGo=",
      name: "MasterPiece Masterplace Art Auction Extra",
      price: "59.99",
    },
  ];

  return (
    <div className="carousel-container md:px-12">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="slider-item group relative  ">
            <div className="slider-content">
              <div className="card  rounded-lg shadow-xl overflow-hidden flex sm:flex-row ">
                <img
                  src={item.img}
                  alt={`slide-${index}`}
                  className="card-img w-full sm:w-48 sm:h-48 object-cover"
                />
                <div className="card-body p-4 w-full flex flex-col items-start">
                  {/* time value */}
                  <div className="timeData group-hover:hidden absolute  bg-white  top-48 rounded-xl border border-black flex justify-center gap-3 pt-1 pb-1 transition-all duration-300 ">
                    <h6 className="capitalize flex flex-col font-normal text-xs">
                      <span className="font-semibold text-lg">00</span>day{" "}
                    </h6>
                    <span className="flex justify-center">:</span>
                    <h6 className="capitalize flex flex-col text-xs">
                      <span className="font-semibold text-lg">00</span>hours{" "}
                    </h6>
                    <span className="flex justify-center">:</span>
                    <h6 className="capitalize flex flex-col text-xs">
                      <span className="font-semibold text-lg">00</span>Min
                    </h6>
                    <span className="flex justify-center">:</span>
                    <h6 className="capitalize flex flex-col text-xs">
                      <span className="font-semibold text-lg">00</span>sec{" "}
                    </h6>
                  </div>

                  <h3 className="text-lg w-full  text-start font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <div className="w-full flex justify-between mt-2">
                    <div>
                      <p className="text-sm text-gray-500">Current Bid</p>
                      <h3 className="text-lg font-semibold text-gray-800">
                        ${item.price}
                      </h3>
                    </div>
                    <button className="card-btn px-6 py-1 mt-3">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterModeSlider;

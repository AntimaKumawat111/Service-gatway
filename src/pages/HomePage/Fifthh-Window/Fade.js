import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Fade({ onImageChange }) {
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 1024);
  const [images, setImages] = useState([
    "https://probid-nextjs.vercel.app/assets/img/home5/home5-banner2-img3.png",
    "https://probid-nextjs.vercel.app/assets/img/home5/home5-banner2-img1.png",
    "https://probid-nextjs.vercel.app/assets/img/home5/home5-banner2-img2.png",
  ]);
  const [key, setKey] = useState(0);  // Track slider image change

  useEffect(() => {
    const handleResize = () => setIsVisible(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageChange = (currentSlide) => {
    setKey(prevKey => prevKey + 1);  // Update key to trigger re-animation
    onImageChange();  // Call parent callback to reset LeftSideData animation
  };

  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: handleImageChange,  // Track image change
  };

  return (
    <div
      className={`slider-container h-[460px] w-[35rem] ${
        !isVisible ? "hidden" : ""
      }`}
    >
      {isVisible && (
        <Slider {...settings}>
          {images.map((src, index) => (
            <motion.div
              key={key}  // Reset animation when key changes
              initial={{ y: -100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: index * 0.5,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex justify-end overflow-hidden"
            >
              <img
                src={src}
                alt={`Abstract ${index + 1}`}
                className="w-full object-cover"
              />
            </motion.div>
          ))}
        </Slider>
      )}
    </div>
  );
}

// Custom Left Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-2 md:left-5 lg:left-10 z-10 transform -translate-y-1/2 
      bg-gray-800 bg-opacity-50 p-2 md:p-3 rounded-full text-white hover:bg-gray-600 transition"
    >
      <ArrowBackIcon fontSize="small" />
    </button>
  );
};

// Custom Right Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-2 md:right-5 lg:right-10 z-10 transform -translate-y-1/2 
      bg-gray-800 bg-opacity-50 p-2 md:p-3 rounded-full text-white hover:bg-gray-600 transition"
    >
      <ArrowForwardIcon fontSize="small" />
    </button>
  );
};

export default Fade;

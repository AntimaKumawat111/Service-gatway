import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion, useInView } from "framer-motion";
import MovingCards from "./MovingCards";
// import TopBar from "./TopBar";
import TopBar from "./Top_Bar";

function MainFrom6thWindow() {
  const [reverse, setReverse] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const slick = sliderRef.current;
        if (!reverse) {
          slick.slickNext();
        } else {
          slick.slickPrev();
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [reverse]);

  useEffect(() => {
    const checkEnd = setInterval(() => {
      if (sliderRef.current) {
        const slick = sliderRef.current;
        const currentSlide = slick.innerSlider.state.currentSlide;
        const totalSlides = slick.innerSlider.props.children.length;

        if (currentSlide === totalSlides - 3) {
          setReverse(true);
        } else if (currentSlide === 0) {
          setReverse(false);
        }

        const progress = (currentSlide / (totalSlides - 3)) * 100;
        setProgressWidth(progress > 100 ? 100 : progress);
      }
    }, 500);

    return () => clearInterval(checkEnd);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, dots: true },
      },
    ],
  };

  return (
    <div ref={containerRef} className="w-[100vw] sm:w-[90vw] m-auto relative">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <TopBar />
      </motion.div>
      {/* Animated Progress Bar */}
      <motion.div
        className="w-full h-1 bg-gray-300 rounded-lg mt-1 my-4 relative overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          className="h-1 bg-blue-500"
          animate={{ width: `${progressWidth}%` }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        />
      </motion.div>

      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings}>
        {[
          {
            step: "Step-1",
            name: "Registrasion",
            paragraph:
              "Cras cursus faucibus enim id porta. Curab aeneam id lacin esteran.",
            firstValue: "Short specification",
            secondValue: "Require for new Registrasion",
          },
          {
            step: "Step-2",
            name: "Select Product",
            paragraph:
              "Cras cursus faucibus enim id porta. Curab aeneam id lacin esteran.",
            firstValue: "Search your Auction",
            secondValue: "Find the right Product",
          },
          {
            step: "Step-3",
            name: "Go to Bidding",
            paragraph:
              "Cras cursus faucibus enim id porta. Curab aeneam id lacin esteran.",
            firstValue: "Choose the bid product",
            secondValue: "Bid according your ability",
          },
          {
            step: "Step-4",
            name: "Make Payment",
            paragraph:
              "Cras cursus faucibus enim id porta. Curab aeneam id lacin esteran.",
            firstValue: "Specific information",
            secondValue: "Require for Registrasion",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <MovingCards
              step={item.step}
              name={item.name}
              paragraph={item.paragraph}
              firstValue={item.firstValue}
              secondValue={item.secondValue}
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}

export default MainFrom6thWindow;

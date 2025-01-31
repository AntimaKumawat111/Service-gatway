import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

// ui icons
import SouthEastIcon from "@mui/icons-material/SouthEast";

// local module
import ActionAreaCard from "./card";
import TopBar from "./topbar";

function MainFrom3rdWindow() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: true,
    touchMove: true,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
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
    <div className="first-box w-[100vw] p-10 bg-blue-100">
      {/* TopBar Animation */}
      <motion.div
        initial={{ opacity: 0, x: "-100%", y: "-100%" }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <TopBar />
      </motion.div>

      {/* Slider Animation */}
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Slider {...settings}>
          <div className="card">
            <ActionAreaCard
              url={
                "https://probid-nextjs.vercel.app/assets/img/home5/category-img1.png"
              }
              name={"Smartphones"}
            />
          </div>
          <div className="card h-auto">
            <ActionAreaCard
              url={
                "  https://probid-nextjs.vercel.app/assets/img/home5/category-img2.png"
              }
              name={"Computers"}
            />
          </div>
          <div className="card h-auto">
            <ActionAreaCard
              url={
                "  https://probid-nextjs.vercel.app/assets/img/home5/category-img3.png"
              }
              name={"Photography"}
            />
          </div>
          <div className="card h-auto">
            <ActionAreaCard
              url={
                "https://probid-nextjs.vercel.app/assets/img/home5/category-img4.png"
              }
              name={"Head-Phones"}
            />
          </div>
          <div className="card h-auto">
            <ActionAreaCard
              url={
                "https://probid-nextjs.vercel.app/assets/img/home5/category-img5.png"
              }
              name={"Drone & VR"}
            />
          </div>
          <div className="card h-auto">
            <ActionAreaCard
              url={
                "  https://probid-nextjs.vercel.app/assets/img/home5/category-img6.png"
              }
              name={"Smart Watches"}
            />
          </div>

          <div className="card h-auto">
            <ActionAreaCard
              url={
                "  https://probid-nextjs.vercel.app/assets/img/home5/category-img7.png"
              }
              name={"Office Gadgets"}
            />
          </div>
          <div className="card h-auto">
            <ActionAreaCard
              url={
                " https://probid-nextjs.vercel.app/assets/img/home5/category-img8.png"
              }
              name={"Personal Care"}
            />
          </div>
          <div className="card h-auto">
            <ActionAreaCard
              url={
                " https://probid-nextjs.vercel.app/assets/img/home5/category-img9.png"
              }
              name={"Gaming"}
            />
          </div>
        </Slider>
      </motion.div>

      {/* Button Animation */}
      <motion.button
        className="mx-auto mt-5 mb-10 px-6 py-3 underline font-semibold flex items-center gap-2 hover:text-blue-900 transition"
        onClick={() =>
          (window.location.href =
            "https://probid-nextjs.vercel.app/category")
        }
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        View all Category
        <SouthEastIcon className="border border-black rounded-full p-1 bg-neutral-500 hover:-rotate-45 hover:bg-blue-900 hover:text-white" />
      </motion.button>
    </div>
  );
}

export default MainFrom3rdWindow;

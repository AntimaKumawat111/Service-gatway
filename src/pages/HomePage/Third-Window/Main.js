import React from "react";
import Slider from "react-slick";

// ui icons
import SouthEastIcon from "@mui/icons-material/SouthEast";


// import "../App.css";
import "../../../App.css";

// local module
import ActionAreaCard from "./card";
import TopBar from "./topbar";

function Main() {
  var settings = {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // vertical:true,
        },
      },
    ],
  };

  return (
    <div className="first-box w-[100vw] p-10 bg-blue-100">
      <TopBar />
      <Slider {...settings}>
        <div className="card">
          {/* <h3>1</h3> */}
          <ActionAreaCard
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img1.png"
            }
            name={"Smartphones"}
          />
        </div>
        <div className="card h-auto">
          {/* <h3>1</h3> */}
          <ActionAreaCard
            url={
              "  https://probid-nextjs.vercel.app/assets/img/home5/category-img2.png"
            }
            name={"Computers"}
          />
        </div>
        <div className="card h-auto ">
          {/* <h3>1</h3> */}
          <ActionAreaCard
            url={
              "  https://probid-nextjs.vercel.app/assets/img/home5/category-img3.png"
            }
            name={"Photography"}
          />
        </div>
        <div className="card h-auto">
          {/* <h3>1</h3> */}
          <ActionAreaCard
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img4.png"
            }
            name={"Head-Phones"}
          />
        </div>
        <div className="card h-auto">
          {/* <h3>1</h3> */}
          <ActionAreaCard
            url={
              "https://probid-nextjs.vercel.app/assets/img/home5/category-img5.png"
            }
            name={"Drone & VR"}
          />
        </div>
        <div className="card h-auto">
          {/* <h3>1</h3> */}
          <ActionAreaCard
            url={
              "  https://probid-nextjs.vercel.app/assets/img/home5/category-img6.png"
            }
            name={"Smart Watches"}
          />
        </div>

        <div className="card h-auto">
          {/* <h3>1</h3> */}
          <ActionAreaCard
            url={
              "  https://probid-nextjs.vercel.app/assets/img/home5/category-img7.png"
            }
            name={"Office Gadgets"}
          />
        </div>
        <div className="card h-auto">
          {/* <h3>1</h3> */}
          <ActionAreaCard
            url={
              " https://probid-nextjs.vercel.app/assets/img/home5/category-img8.png"
            }
            name={"Personal Care"}
          />
        </div>
        <div className="card h-auto">
          {/* <h3>1</h3> */}
          <ActionAreaCard
            url={
              " https://probid-nextjs.vercel.app/assets/img/home5/category-img9.png"
            }
            name={"Gaming"}
          />
        </div>
      </Slider>

      <button
        className="mx-auto mt-5 mb-10 px-6 py-3 underline font-semibold flex items-center gap-2 hover:text-blue-900 transition"
        onClick={() =>
          (window.location.href =
            "https://probid-nextjs.vercel.app/category")
        }
      >
        {" "}
        View all Category{" "}
        <SouthEastIcon className="border border-black rounded-full p-1 bg-neutral-500 hover:-rotate-45 hover:bg-blue-900 hover:text-white" />
      </button>
    </div>
  );
}

export default Main;

import React from "react";
import Card from "./Card";
import TopBar from "./Top_Bar";
function Container() {
  return (
    <>
      <div className="border-4 border-black h-auto py-5 w-[90vw] m-auto bg-blue-100 ">
        <TopBar />
        <div className="flex items-center justify-around">
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-01.png"
            }
          />
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-02.png"
            }
          />
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-03.png"
            }
          />
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-04.png"
            }
          />
          <Card
            url={
              "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-06.png"
            }
          />
        </div>
      </div>
    </>
  );
}

export default Container;

// import React from "react";
// import Slider from "react-slick";
// import Card from "./Card";

// function Container() {
//   const settings = {
//     arrow: false,
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <Card
//             url={
//               "https://probid-nextjs.vercel.app/assets/img/home1/company-logo-06.png"
//             }
//           />
//         </div>
//         <div>
//           <h3>28</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default Container;

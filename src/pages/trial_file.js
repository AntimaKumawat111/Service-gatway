// --------------------------------this is app.css 
//  {
//   margin: 0;
//   padding: 0;
// }

// html {
//   /* font-size: 62.5%; */
//   scroll-behavior: smooth;
//   box-sizing: border-box;
// }

// body {
//   border: 3px solid red;
//   width: 100vw;
//   height: auto;
//   overflow-y: scroll;
//   position: relative;
// }

// /* Add styles specifically to the input field */
// .custom-search .ant-input {
//   padding: 15px;
//   height: 40px; /* Sets height for the input field */
//   border: 1px solid black;
//   border-radius: 50px; /* Rounds input corners */
// }

// /* Add styles to the search button */
// .custom-search .ant-btn {
//   padding: 0 20px; /* Adds padding inside the button */
//   height: 40px; /* Matches the input box height */
//   border-radius: 20px; /* Rounds button corners */
// }

// /* Placeholder text color (if needed) */
// .custom-search .ant-input::placeholder {
//   color: black;
//   opacity: 0.5;
//   font-size: 14px;
// }

// @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(-20px); /* Slight upward motion */
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// .fade-in {
//   animation: fadeIn 3s ease-out;
// }


// -------------------------------- Main.js from Middle_home_data

// import React from "react";
// // UI icons
// import FlareIcon from "@mui/icons-material/Flare";
// import SouthEastIcon from "@mui/icons-material/SouthEast";
// // Social Media Icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import TwitterIcon from "@mui/icons-material/Twitter";

// function Main() {
//   // Function to handle navigation
//   const handleBidClick = () => {
//     window.location.href =
//       "https://probid-nextjs.vercel.app/gadget-and-technology/auction-grid";
//   };

//   const handleViewClick = () => {
//     window.location.href =
//       "https://probid-nextjs.vercel.app/gadget-and-technology/auction-grid";
//   };

//   return (
//     <div className="border border-white w-full h-auto mt-24 flex flex-col lg:flex-row">
//       {/* social apps - hidden on small screens (900px or smaller) */}
//       <div className="w-24 pt-4 pb-4 hidden lg:block">
//         <ul className="flex flex-col items-center space-y-2 lg:p-9">
//           {/* Facebook */}
//           <li className="flex flex-col items-center ">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-500"
//             >
//               <FacebookIcon style={{ fontSize: "1.5rem" }} />
//             </a>
//             <span className="text-lg">•</span>
//           </li>

//           {/* Instagram */}
//           <li className="flex flex-col items-center">
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-500"
//             >
//               <InstagramIcon style={{ fontSize: "1.5rem" }} />
//             </a>
//             <span className="text-lg">•</span>
//           </li>

//           {/* Pinterest */}
//           <li className="flex flex-col items-center">
//             <a
//               href="https://pinterest.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-red-500"
//             >
//               <PinterestIcon style={{ fontSize: "1.5rem" }} />
//             </a>
//             <span className="text-lg">•</span>
//           </li>

//           {/* Twitter */}
//           <li className="flex flex-col items-center">
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-400"
//             >
//               <TwitterIcon style={{ fontSize: "1.5rem" }} />
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* center data */}
//       <div className="flex flex-col ml-6 lg:ml-0 lg:flex-1">
//         {/* here is button */}
//         <div>
//           <button className="uppercase bg-neutral-500 border pt-2 pb-2 pl-4 pr-4 text-xs font-semibold rounded-3xl flex items-center gap-2">
//             <FlareIcon style={{ fontSize: "1rem" }} /> Probid you can trust
//           </button>
//         </div>
//         {/* middle box data */}
//         <div className=" w-full md:w-3/4  xl:w-1/2  lg:w-3/4 mt-2   ">
//           {/* <div className="border w-full md:w-2/4 xl:w-3/4 mt-2 xl:border-red-800"> */}

//           <h1 className="capitalize font-bold tracking-wider text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
//             select our product at our auction.
//           </h1>

//           <p className="text-lg mt-5 mb-5">
//             Join us as we carve a path to success, driven by passion, powered by
//             innovation, and we're here to turn them into reality.
//           </p>
//           <div className="flex gap-5 flex-wrap">
//             <button
//               className="capitalize border pt-2 pb-2 pl-4 pr-4 text-lg font-semibold rounded-lg"
//               onClick={handleBidClick}
//             >
//               Start a Bid <SouthEastIcon style={{ fontSize: "1.2rem" }} />
//             </button>
//             <button
//               className="capitalize bg-blue-700 pt-2 pb-2 pl-4 pr-4 text-lg font-semibold rounded-lg"
//               onClick={handleViewClick}
//             >
//               View all auctions
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;

// -------------------------------- from Second-Window 
// transfered

import React from "react";
import homePageCss from "./home_page.module.css"; // Importing CSS module correctly
import Home from "./Home";
import MainFile from "./Second-Window/Main_file";
function HomePage() {
  return (
    <>
      <div className="main_container flex">
        <div className={homePageCss.carousel_container}>
          {" "}
          {/* Apply class from CSS Module */}
          <div className={homePageCss.carousel_track}>
            {" "}
            {/* Apply class from CSS Module */}
            <img
              className={homePageCss.carousel_image} // Apply class from CSS Module
              src="https://probid-nextjs.vercel.app/assets/img/home5/home5-banner-img3.jpg"
              alt="image1"
            />
            <img
              className={homePageCss.carousel_image} // Apply class from CSS Module
              src="https://probid-nextjs.vercel.app/assets/img/home5/home5-banner-img1.jpg"
              alt="image2"
            />
            <img
              className={homePageCss.carousel_image} // Apply class from CSS Module
              src="https://probid-nextjs.vercel.app/assets/img/home5/home5-banner-img2.jpg"
              alt="image3"
            />
          </div>
          <Home />
          <MainFile />
        </div>
      </div>
    </>
  );
}

export default HomePage;

// import React from "react";
// import homePageCss from "./home_page.module.css"; // Importing CSS module correctly
// import Home from "./Home";
// import MainFile from "./Second-Window/Main_file";

// function HomePage() {
//   return (
//     <>
//       <div className="main_container">
//         {/* Carousel */}
//         <div className={homePageCss.carousel_container}>
//           <div className={homePageCss.carousel_track}>
//             <img
//               className={homePageCss.carousel_image}
//               src="https://probid-nextjs.vercel.app/assets/img/home5/home5-banner-img3.jpg"
//               alt="image1"
//             />
//             <img
//               className={homePageCss.carousel_image}
//               src="https://probid-nextjs.vercel.app/assets/img/home5/home5-banner-img1.jpg"
//               alt="image2"
//             />
//             <img
//               className={homePageCss.carousel_image}
//               src="https://probid-nextjs.vercel.app/assets/img/home5/home5-banner-img2.jpg"
//               alt="image3"
//             />
//           </div>
//         </div>

//         {/* Home Component */}
//         <Home />

//         {/* MainFile */}
//         <MainFile />
//       </div>
//     </>
//   );
// }

// export default HomePage;

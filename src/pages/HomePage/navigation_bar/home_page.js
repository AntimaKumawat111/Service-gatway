
import React from "react";

// local module
import Home from "./Home";
import homePageCss from "./home_page.module.css"; // Importing CSS module correctly
import MainFile from "../../HomePage/Second-Window/Main_file";


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

import React from "react";
// import Fade from "./FadeImagesforFirstWindow";
// import Navbar from "./Navbar";
// import Fade from "./Fade_images";
import Fade from "./FadeImages";
import NavigationBar from "./NavigationBar";
import MiddleData from "./MiddleData";


function Mainfrom1stWindow() {
  return (
    <div className="relative w-full h-full overflow-x-hidden overflow-y-scroll">
      <Fade />
      <div className="absolute top-0 w-full bg-transparent p-4">
        <NavigationBar />
        <MiddleData/>
      </div>
    </div>
  );
}

export default Mainfrom1stWindow;
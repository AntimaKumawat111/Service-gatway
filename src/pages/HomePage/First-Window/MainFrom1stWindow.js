import React from "react";
// import Fade from "./FadeImagesforFirstWindow";
import Navbar from "./Navbar";
import Fade from "./Fade_images";

function Mainfrom1stWindow() {
  return (
    <div className="border-4 border-red-900  relative w-full h-full overflow-x-hidden overflow-y-scroll">
      <Fade />
      <div className="absolute top-0 w-full bg-transparent p-4">
        <Navbar />
      </div>
    </div>
  );
}

export default Mainfrom1stWindow;

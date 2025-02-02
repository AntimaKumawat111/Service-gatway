import React from "react";
import TopNav from "./NavBar/TopNav";
import SubNav from "./NavBar/SubNav";
import Fade from "./Fade_images";
import MiddleData from "./MiddleData";

function HomePageFile() {
  return (
    <>
      <div className="relative">
        {/* The Fade and Navigation stay at the top */}
        <Fade />
        <div className="absolute top-0 left-0 w-full z-10">
          <TopNav />
          <SubNav />
          <MiddleData/>
        </div>
      </div>
    </>
  );
}

export default HomePageFile;

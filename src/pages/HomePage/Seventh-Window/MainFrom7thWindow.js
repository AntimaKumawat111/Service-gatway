import React from "react";
import ImageSlider from "./ImageSlider";
import TopBar from "./Top_Bar";
function MainFrom7thWindow() {
  return (
    <>
      <div className=" py-3 sm:py-5 md:py-8 w-[90vw] m-auto mt-14 mb-4 bg-blue-100">
      <TopBar/>
        <ImageSlider />
      </div>
    </>
  );
}

export default MainFrom7thWindow;

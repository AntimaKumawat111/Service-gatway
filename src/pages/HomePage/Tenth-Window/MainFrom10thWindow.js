import React from "react";
import TopBar from "./TopBar";
import ImageContainer from "./ImageContainer";
// import BottomImages from "./BottomImages";

function MainFrom10thWindow() {
  return (
    <>
      <div className="bg-blue-50 py-2 mt-3 lg:mt-14">
        <TopBar />
        <ImageContainer />
        {/* <BottomImages /> */}
      </div>
    </>
  );
}

export default MainFrom10thWindow;

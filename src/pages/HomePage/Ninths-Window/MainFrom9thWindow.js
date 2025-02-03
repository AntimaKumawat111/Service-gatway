import React from "react";
import LeftData from "./LeftData";
import ImageCard from "./ImageCard";
import "../../../App.css";

function MainFrom9thWindow() {
  return (
    <>
      <div className="flex w-[100vw] overflow-hidden items-center justify-between h-auto p-2  m-auto sm:w-[90vw]  ">
        <div>
          <LeftData />
        </div>
        <div>
          <ImageCard />
        </div>
      </div>
    </>
  );
}

export default MainFrom9thWindow;

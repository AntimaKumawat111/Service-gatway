import React from "react";
import TopBar from "./TopBar";

function MainFile() {
  return (
    <>
      <div className="relative bg-white w-full min-h-screen flex flex-col mt-32 border-t-2 rounded-t-3xl">
        <TopBar />
      </div>
    </>
  );
}

export default MainFile;

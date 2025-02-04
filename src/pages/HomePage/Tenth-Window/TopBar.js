import React from "react";

function TopBar() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 mt-10 mb-10  ">
        <p className="uppercase text-blue-700 ">Featured Option</p>
        <h2 className="text-3xl font-bold tracking-wide flex flex-col gap-2 sm:flex-row ">
          Editor's Choice <i className="opacity-70 font-semibold">Features</i>
        </h2>
      </div>
    </>
  );
}
export default TopBar;

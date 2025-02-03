import React from "react";

function TopBar() {
  return (
    <>
      <div className=" fade-in w-full flex flex-col p-2 mt-10 gap-5 xl:flex-row  xl:items-center   md:gap-4 lg:p-12 lg:gap-4  lg:mt-0 ">
        <div className="  sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3  ">
          <p className="uppercase text-blue-700">choose your</p>
          <h2 className="text-4xl capitalize font-bold tracking-wide flex flex-col sm:flex-row gap-2 ">
            upcoming <i className="opacity-70 font-semibold">Auctions</i>
          </h2>
        </div>
      </div>
    </>
  );
}

export default TopBar;

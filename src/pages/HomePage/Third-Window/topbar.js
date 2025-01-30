import React from "react";

function TopBar() {
  return (
    <>
      <div className="  w-full  pt-14 pb-14 gap-4 items-center">
        <div className="  sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 ">
          <p className="uppercase text-blue-700">Chhose your</p>
          <h2 className=" findFromTopBar text-4xl font-bold tracking-wide flex gap-2  ">
            Find Your <i className="opacity-70 font-semibold"> Favorites </i>
          </h2>
        </div>
      </div>
    </>
  );
}

export default TopBar;

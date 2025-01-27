import React, { useState } from "react";
import ImageContainer from "./ImageContainer";

function TopBar() {
  const [activeButton, setActiveButton] = useState(null);
  const buttonLabels = ["Procelain", "Clocks", "Jewelry", "Manuscripts", "Ceramics"];

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  return (
    <>
      <div className="fade-in mt-10 border-4 border-green-500 w-full p-16 flex flex-col gap-5 xl:flex-row xl:border-red-500 xl:border-4 xl:items-center md:border-4 md:border-blue-500 md:gap-4 lg:p-24 lg:gap-4 lg:border-4 lg:border-purple-700 lg:mt-0 lg:items-start">
        <div className="border border-black sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <p className="uppercase text-blue-700">bidding our</p>
          <h2 className="text-4xl font-bold tracking-wide flex gap-2 ">
            Auction <i className="opacity-70 font-semibold">Spotlight</i>
          </h2>
        </div>

        <div className="border border-black flex flex-wrap h-auto pr-10 ml-5 gap-4 xl:border-green-600 xl:items-end">
          {buttonLabels.map((label) => (
            <button
              key={label}
              className={`border border-green-900 pt-2 pb-2 pl-4 pr-4 rounded-2xl text-sm font-medium tracking-wide transition-all duration-200 ${
                activeButton === label
                  ? "bg-blue-600 text-white"
                  : "bg-transparent hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick(label)}
              aria-pressed={activeButton === label} // Accessibility improvement
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <ImageContainer />
    </>
  );
}

export default TopBar;

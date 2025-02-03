import React, { useState } from "react";
// import ImageContainer from "./ImageContainer";

function TopBar() {
  // State to track active button
  const [activeButton, setActiveButton] = useState(null);

  // Array of button labels
  const buttonLabels = [
    "Procelain",
    "Clocks",
    "Jewelry",
    "Manuscripts",
    "Ceramics",
  ];

  // Function to handle button click
  const handleButtonClick = (label) => {
    setActiveButton(label); // Set active button based on clicked label
  };

  return (
    <>
      <div className=" mb-2 sm:mb-8 fade-in w-full flex flex-col p-5 mt-1 gap-5 xl:flex-row  xl:items-center md:gap-4 lg:p-9 lg:gap-4 lg:mt-0 ">
        <div className="  sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 ">
          <p className="uppercase text-blue-700">bidding our</p>
          <h2 className="text-4xl font-bold tracking-wide flex flex-col sm:flex-row gap-2 ">
            Auction <i className="opacity-70 font-semibold">Spotlight</i>
          </h2>
        </div>

        <div className=" flex flex-wrap h-auto pr-10 ml-5 gap-4  xl:items-end">
          {buttonLabels.map((label) => (
            <button
              key={label}
              className={`border border-black pt-2 pb-2 pl-4 pr-4 rounded-2xl bg-transparent text-sm focus:text-white font-medium tracking-wide hover:bg-blue-100  ${
                activeButton === label
                  ? "bg-green-900 text-white border-none"
                  : ""
              }`}
              onClick={() => handleButtonClick(label)} // Set active on click
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {/* <ImageContainer /> */}
    </>
  );
}

export default TopBar;

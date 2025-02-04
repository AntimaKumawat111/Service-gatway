import React from "react";
// import ImageContainer from "./ImageContainer";
import SouthEastIcon from "@mui/icons-material/SouthEast";

function TopBar() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4 mt-10 mb-10  ">
          <p className="uppercase text-blue-700 ">
          Article & Blog
          </p>
          <h2 className="text-3xl font-bold tracking-wide flex flex-col gap-2 sm:flex-row ">
          Inspirational <i className="opacity-70 font-semibold">Insights</i>
          </h2>
        </div>
        <button
          className="capitalize underline hover:text-blue"
          onClick={() =>
            (window.location.href =
              "https://probid-nextjs.vercel.app/gadget-and-technology/auction-grid")
          }
        >
          {" "}
          View all Article{" "}
          <SouthEastIcon className="border border-black  rounded-full p-1 m-2 bg-neutral-500 hover:-rotate-45 hover:bg-blue-900 hover:text-white" />
        </button>
      </div>
    </>
  );
}

export default TopBar;

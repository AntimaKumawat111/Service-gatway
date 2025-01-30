import React from "react";
// ui icons
import SouthEastIcon from "@mui/icons-material/SouthEast";

// local modules
import TopBar from "./TopBar";
import ActiveModeSlider from "./ImageContainer";

function MainFile() {
  return (
    <div className="relative bg-white w-[100vw] min-h-screen flex flex-col justify-between mt-32 sm:mt-96 md:mt-80 md:border-4 lg:mt-40 xl:mt-28 border-t-2 rounded-t-3xl lg:border-4 custom-top-margin">
      <TopBar />
      <ActiveModeSlider />
      <button
        className="mx-auto mt-5 mb-10 px-6 py-3 underline font-semibold flex items-center gap-2 hover:text-blue-900 transition"
        onClick={() =>
          (window.location.href =
            "https://probid-nextjs.vercel.app/auction-grid")
        }
      >
        {" "}
        View all Auctions{" "}
        <SouthEastIcon className="border border-black rounded-full p-1 bg-neutral-500 hover:-rotate-45 hover:bg-blue-900 hover:text-white" />
      </button>
    </div>
  );
}

export default MainFile;

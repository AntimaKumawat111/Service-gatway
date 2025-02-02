import React from "react";
import { motion } from "framer-motion";
import FlareIcon from "@mui/icons-material/Flare";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

function MiddleData() {
  const handleBidClick = () => {
    window.location.href =
      "https://probid-nextjs.vercel.app/gadget-and-technology/auction-grid";
  };

  const handleViewClick = () => {
    window.location.href =
      "https://probid-nextjs.vercel.app/gadget-and-technology/auction-grid";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start from bottom
      animate={{ opacity: 1, y: 0 }} // Move to normal position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
      className="border border-red-900 w-full h-auto mt-24 flex flex-col text-white lg:flex-row"
      style={{ marginTop: "4rem" }}
    >
      {/* Social Apps */}
      <div className="w-24 pt-4 pb-4 hidden lg:block">
        <ul className="flex flex-col items-center space-y-2 lg:p-9">
          <li className="flex flex-col items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FacebookIcon style={{ fontSize: "1.5rem" }} />
            </a>
            <span className="text-lg">•</span>
          </li>
          <li className="flex flex-col items-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <InstagramIcon style={{ fontSize: "1.5rem" }} />
            </a>
            <span className="text-lg">•</span>
          </li>
          <li className="flex flex-col items-center">
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <PinterestIcon style={{ fontSize: "1.5rem" }} />
            </a>
            <span className="text-lg">•</span>
          </li>
          <li className="flex flex-col items-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <TwitterIcon style={{ fontSize: "1.5rem" }} />
            </a>
          </li>
        </ul>
      </div>

      {/* Center Data */}
      <div className="flex flex-col ml-6 lg:ml-0 lg:flex-1">
        <div>
          <button className="uppercase bg-neutral-500 border pt-2 pb-2 pl-4 pr-4 text-xs font-semibold rounded-3xl flex items-center gap-2">
            <FlareIcon style={{ fontSize: "1rem" }} /> Probid you can trust
          </button>
        </div>
        <div className="w-full md:w-3/4 xl:w-1/2 lg:w-3/4 mt-2">
          <h1 className="capitalize font-bold tracking-wider text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
            select our product at our auction.
          </h1>

          <p className="text-lg mt-5 mb-5">
            Join us as we carve a path to success, driven by passion,
            powered by innovation, and we're here to turn them into reality.
          </p>
          <div className="flex gap-5 flex-wrap">
            <button
              className="capitalize border pt-1 pb-1 pl-4 pr-4 text-lg font-semibold rounded-lg"
              onClick={handleBidClick}
            >
              Start a Bid <SouthEastIcon style={{ fontSize: "1.2rem" }} />
            </button>
            <button
              className="capitalize bg-blue-500 hover:bg-blue-700 pt-1 pb-1 pl-4 pr-4 text-lg font-semibold rounded-lg"
              onClick={handleViewClick}
            >
              View all auctions
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MiddleData;

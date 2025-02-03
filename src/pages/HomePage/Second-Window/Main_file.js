import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import SouthEastIcon from "@mui/icons-material/SouthEast";
import TopBar from "./TopBar";
import ActiveModeSlider from "./ImageContainer";

function MainFrom2ndWindow() {
  return (
    <div className="relative bg-white flex flex-col justify-evenly rounded-t-3xl overflow-x-hidden">
      {/* TopBar animation */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: "-100%" }} // Initial position off-screen to the left
        whileInView={{ opacity: 1, x: 0 }} // When in view, move to original position
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <TopBar />
      </motion.div>

      {/* ActiveModeSlider animation from the left */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: "100%" }} // Initial position off-screen to the left
        whileInView={{ opacity: 1, y: 0 }} // When in view, move to original position
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <ActiveModeSlider />
      </motion.div>

      {/* Button animation */}
      <motion.button
        className="mx-auto mt-5 mb-10 px-6 py-2 underline font-semibold flex items-center gap-2 hover:text-blue-900 transition"
        onClick={() =>
          (window.location.href =
            "https://probid-nextjs.vercel.app/auction-grid")
        }
        initial={{ opacity: 0, y: "100%" }} // Initial position off-screen at the bottom
        whileInView={{ opacity: 1, y: 0 }} // When in view, move to original position
        transition={{ duration: 1, ease: "easeOut" }}
      >
        View all Auctions
        <SouthEastIcon className="border border-black rounded-full p-1 bg-neutral-500 hover:-rotate-45 hover:bg-blue-900 hover:text-white" />
      </motion.button>
    </div>
  );
}

export default MainFrom2ndWindow;

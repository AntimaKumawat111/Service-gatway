import React, { useState } from "react";
import { motion } from "framer-motion";
import Fade from "./Fade";
import LeftSideData from "./LeftSideData";

function Mainfrom5thWindow() {
  const [resetKey, setResetKey] = useState(0);

  const handleImageChange = () => {
    setResetKey((prevKey) => prevKey + 1); // Update resetKey to trigger LeftSideData re-render
  };

  return (
    <motion.div
      initial={{ x: -100, y: -100, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="bg-gray-300 w-[100vw] sm:p-10 mt-24 mb-0 lg:pb-0 overflow-hidden flex justify-evenly lg:items-center relative">
        <div className="hot_now absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 border border-black h-[9rem] flex justify-center items-center  px-1 text-white bg-red-500 rounded-b-full py-3 pt-16 z-10">
          <p className="font-bold text-xl tracking-wide capitalize text-white">
            hot now
          </p>
        </div>
        {/* Trigger re-render when resetKey changes */}
        {/* Left Side Content */}
        <LeftSideData key={resetKey} /> {/* Image Fade Animation */}
        <Fade onImageChange={handleImageChange} />
      </div>
    </motion.div>
  );
}

export default Mainfrom5thWindow;

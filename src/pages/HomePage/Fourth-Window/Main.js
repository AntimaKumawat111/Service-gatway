import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// local modules
import TopBar from "./topbar";
import ActiveCards from "./ActiveCardFor-smallerScreen.js/Active_Card";
import ActiveCard2nd from "./ActiveCardFor_largerScreen.js/Active_Card2nd";

function Mainfrom4thwindow() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-white w-[90vw] m-auto min-h-screen flex flex-col rounded-t-3xl custom-top-margin">
      {/* TopBar Animation */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <TopBar />
      </motion.div>

      {/* Active Cards or ActiveCard2nd Animation */}
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {isSmallScreen ? <ActiveCards /> : <ActiveCard2nd />}
      </motion.div>
    </div>
  );
}

export default Mainfrom4thwindow;

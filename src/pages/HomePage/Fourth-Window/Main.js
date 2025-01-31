import React, { useState, useEffect } from "react";

// local modules
import TopBar from "./topbar";
import ActiveCards from "./ActiveCardFor-smallerScreen.js/Active_Card";
import ActiveCard2nd from "./ActiveCardFor_largerScreen.js/Active_Card2nd";

function MainFilefrom4thwindow() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-white w-[90vw] m-auto  min-h-screen flex flex-col  rounded-t-3xl custom-top-margin">
      <TopBar />
      {isSmallScreen ? <ActiveCards /> : <ActiveCard2nd />}
    </div>
  );
}

export default MainFilefrom4thwindow;

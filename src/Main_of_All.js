import React from "react";
import "./App.css";

import Mainfrom1stWindow from "./pages/HomePage/First-Window/MainFrom1stWindow";
import MainFrom2ndWindow from "./pages/HomePage/Second-Window/Main_file";
import MainFrom3rdWindow from "./pages/HomePage/Third-Window/Main";
import Mainfrom4thwindow from "./pages/HomePage/Fourth-Window/Main";
import Mainfrom5thWindow from "./pages/HomePage/Fifthh-Window/Mainfrom5theWindow";
import MainFrom6thWindow from "./pages/HomePage/Sixth-Window/Main";
import MainFrom7thWindow from "./pages/HomePage/Seventh-Window/MainFrom7thWindow";
import MainFrom8thWindow from "./pages/HomePage/Eighth-Window/Main_file";
import MainFrom9thWindow from "./pages/HomePage/Ninths-Window/MainFrom9thWindow";
import MainFrom10thWindow from "./pages/HomePage/Tenth-Window/MainFrom10thWindow";
import MainFrom11thWindow from "./pages/HomePage/Eleventh-Window/MainFrom11thWindow";

function MainOfAll() {
  return (
    <>
      <div className="border-4 border-yellow-600 m-auto  ">
        <Mainfrom1stWindow />
        <MainFrom2ndWindow />
        <MainFrom3rdWindow />
        <Mainfrom4thwindow />
        <Mainfrom5thWindow />
        <MainFrom6thWindow />
        <MainFrom7thWindow />
        <MainFrom8thWindow />
        <MainFrom9thWindow />
        <MainFrom10thWindow />
        <MainFrom11thWindow/>
      </div>
    </>
  );
}

export default MainOfAll;

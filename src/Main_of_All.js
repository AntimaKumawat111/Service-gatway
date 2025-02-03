import React from "react";
import "./App.css";

import Mainfrom1stWindow from "./pages/HomePage/First-Window/MainFrom1stWindow"
import MainFrom2ndWindow from "./pages/HomePage/Second-Window/Main_file";
import MainFrom3rdWindow from "./pages/HomePage/Third-Window/Main";
import Mainfrom4thwindow from "./pages/HomePage/Fourth-Window/Main";
import Mainfrom5thWindow from "./pages/HomePage/Fifthh-Window/Mainfrom5theWindow";
import MainFrom6thWindow from "./pages/HomePage/Sixth-Window/Main";
import MainFrom7thWindow from "./pages/HomePage/Seventh-Window/MainFrom7thWindow";
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
        <MainFrom7thWindow/>
      </div>
    </>
  );
}

export default MainOfAll;

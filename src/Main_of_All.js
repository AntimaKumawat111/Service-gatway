import React from "react";
import "./App.css";

// import MainFrom1stWindow from "./pages/HomePage/First-Window/MainFrom1stWindow";
// import MainFrom1stWindow from "./pages/HomePage/First-Window/MainFrom1stWindow";
// import MainFrom1stWindow from "./pages/HomePage/First-Window copy/MainFrom1stWindow";


// import Mainfrom1stWindow from "./pages/HomePage/First-Window/MainFrom1stWindow";
// -----------------------------------
import Mainfrom1stWindow from "./pages/HomePage/First-Window/MainFrom1stWindow"
// import MainFrom2ndWindow from "./pages/HomePage/Second-Window/Main_file";
import MainFrom2ndWindow from "./pages/HomePage/Second-Window/Main_file";
import MainFrom3rdWindow from "./pages/HomePage/Third-Window/Main";
import Mainfrom4thwindow from "./pages/HomePage/Fourth-Window/Main";
import Mainfrom5thWindow from "./pages/HomePage/Fifthh-Window/Mainfrom5theWindow";
import MainFrom6thWindow from "./pages/HomePage/Sixth-Window/Main";
// import MainFrom3rdWindow from "./pages/HomePage/Third-Window/Main";
// import Mainfrom4thwindow from "./pages/HomePage/Fourth-Window/Main";
// import Mainfrom5thWindow from "./pages/HomePage/Fifthh-Window/Mainfrom5theWindow";
// import MainFrom6thWindow from "./pages/HomePage/Sixth-Window/Main";


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
      </div>
    </>
  );
}

export default MainOfAll;

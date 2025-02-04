import React from "react";
import Category from "./Category";
import Company from "./Company";
import SocialMedia from "./SocialMedia";
import EmailContainer from "./EmailContainer";

function MainFrom14thWindow() {
  return (
    <>
      <div className=" w-[100vw] p-4 md:p-8 m-auto gap-8 lg:gap-14 text-white bg-black flex flex-col lg:flex-row items-start justify-evenly ">
        <div className="flex flex-col sm:flex-row w-[80%] lg:w-[45%] justify-between lg:justify-around ">
          <Category />
          <Company />
        </div>
        <div className="flex flex-col md:flex-row w-[80%] lg:w-[60%] gap-3 justify-between  ">
          <SocialMedia />
          <EmailContainer />
        </div>
      </div>
    </>
  );
}

export default MainFrom14thWindow;

import React from "react";
import InputBox from "./Input_Box";
import {
  HomeDropDown,
  AuctionsDropDown,
  BlogDropDown,
  PagesDropDown,
  Contact,
} from "./DropdownLlist";

function SubNav() {
  return (
    <>
      <div className="border-4 border-blue-700">
        <div className="hidden lg:flex sm:border-4 pt-3 pb-3 items-center justify-around w-full border border-white border-opacity-50">
          <div className="w-auto">
            <div className="flex items-center">
              <div className="text-black font-semibold text-xl">
                <img
                  src="https://probid-nextjs.vercel.app/assets/img/logo-white.svg"
                  alt="Main-Logo"
                />
              </div>
              <div>
                <HomeDropDown />
                <AuctionsDropDown />
                <BlogDropDown />
                <PagesDropDown />
                <Contact />
              </div>
            </div>
          </div>

          <div className="w-1/3">
            <InputBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubNav;

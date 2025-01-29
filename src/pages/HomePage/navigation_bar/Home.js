import React, { useState, useEffect } from "react";
import HomeCss from "./Home.module.css";
import {
  HomeDropDown,
  AuctionsDropDown,
  BlogDropDown,
  PagesDropDown,
  Contact,
} from "./dropdown_list";

// ui icons
import EmailIcon from "@mui/icons-material/Email";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TranslateSharpIcon from "@mui/icons-material/TranslateSharp";

// local modules
import Input_Box from "./Input_Box";
import MenuBtnPage from "./menu_touch_page";
// import Main from "../Middle_home_data copy/Main";
import Main from "../Middle_home_data/Main";


function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(
    window.innerWidth <= 1100
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setShowMenuButton(window.innerWidth <= 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="relative bg-transparent text-white">
        <nav className="hidden lg:flex pt-3 pb-3 items-center justify-evenly border-b border-white border-opacity-50">
          {" "}
          {/* Contact Info */}
          <div className="flex gap-2">
            <div className="flex gap-2 text-sm">
              <EmailIcon />
              <p>info@example.com</p>
            </div>

            <div className="w-0.5 h-7 ml-2 mr-2 rounded-full bg-black "></div>

            <div className="flex gap-2">
              <SupportAgentIcon />
              <p>info@example.com</p>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-9">
            <div className="flex gap-5 items-center">
              <button className="border border-white text-xs font-semibold bg-transparent text-white rounded-3xl pl-6 pr-6 h-7">
                <a href="https://probid-nextjs.vercel.app/gadget-and-technology/how-to-buy">
                  HOW TO BID
                </a>
              </button>
              <button className="border border-white text-sm font-semibold bg-transparent text-white rounded-3xl pl-6 pr-6 h-7">
                <a href="https://probid-nextjs.vercel.app/gadget-and-technology/how-to-buy">
                  SELL YOUR ITEM
                </a>
              </button>
            </div>
            {/* Language Dropdown */}
            <div className={HomeCss.languageDropdown}>
              <TranslateSharpIcon />
              <button className={HomeCss.dropdownBtn}>Languages</button>
              <div className={HomeCss.dropdownContent}>
                <a href="#">English</a>
                <a href="#">Spanish</a>
                <a href="#">French</a>
                <a href="#">German</a>
                <a href="#">Italian</a>
              </div>
            </div>
          </div>
        </nav>

        <div>
          <div className="hidden lg:flex pt-3 pb-3 items-center justify-around w-full border border-white border-opacity-50">
            <div className=" w-auto">
              <div className="flex items-center ">
                <div className="text-white font-semibold text-xl">
                  MyWebsite
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
              <Input_Box />
            </div>
          </div>
        </div>

        {showMenuButton && <MenuBtnPage />}

        {/* homes middle screen's data */}
        <div>
          <Main />
        </div>
      </div>
    </>
  );
}

export default Home;

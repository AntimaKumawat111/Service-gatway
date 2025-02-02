import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import { Link } from "react-router-dom"; // Import Link for navigation

// UI icons
import EmailIcon from "@mui/icons-material/Email";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TranslateSharpIcon from "@mui/icons-material/TranslateSharp";

// Local modules
import NavbarCss from "./NavigarionBar.module.css";
import {
  HomeDropDown,
  AuctionsDropDown,
  BlogDropDown,
  PagesDropDown,
  Contact,
} from "./DropDownList";
import InputBox from "./InputBox";
import MenuBtnPage from "./MenuBtnPage";

function NavigationBar() {
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
        <motion.nav
          className=" hidden lg:flex pt-3 pb-3 items-center justify-evenly border-b border-white border-opacity-50"
          initial={{ x: "-100%", y: "-100%", opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Contact Info */}
          <div className="gap-2 flex lg:gap-1 xl:gap-2">
            <div className="gap-2 flex lg:gap-1 xl:gap-2 text-sm">
              <EmailIcon />
              <p>info@example.com</p>
            </div>

            <div className="w-0.5 h-6 ml-2 mr-2 rounded-full bg-white "></div>

            <div className="gap-2 flex lg:gap-1 xl:gap-2 text-sm">
              <SupportAgentIcon />
              <p>info@example.com</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row-reverse xl:flex-row gap-3 xl:gap-5 items-center">
            <div className="flex flex-col xl:flex-row gap-3 xl:gap-5 items-center">
              <button className="border text-xs font-semibold bg-transparent text-white rounded-3xl pl-4 pr-4 h-7 xl:pl-6 xl:pr-6 ">
                <a href="https://probid-nextjs.vercel.app/gadget-and-technology/how-to-buy">
                  HOW TO BID
                </a>
              </button>
              <button className="border border-white text-sm font-semibold bg-transparent text-white rounded-3xl pl-4 pr-4 h-7 xl:pl-6 xl:pr-6 ">
                <a href="https://probid-nextjs.vercel.app/gadget-and-technology/how-to-buy">
                  SELL YOUR ITEM
                </a>
              </button>
            </div>
            {/* Language Dropdown */}
            <div className={NavbarCss.languageDropdown}>
              <TranslateSharpIcon />
              <button className={NavbarCss.dropdownBtn}>Languages</button>
              <div className={NavbarCss.dropdownContent}>
                <a href="#">English</a>
                <a href="#">Deutsch</a>
                <a href="#">Svenska</a>
                <a href="#">unknown</a>
                <a href="#">unknown</a>
                <a href="#">Netherlands</a>
              </div>
            </div>

            <Link to="/course">
              <button className="border border-white text-sm font-semibold bg-transparent text-white rounded-3xl pl-6 pr-6 h-7">
                Course
              </button>
            </Link>
            <Link to="/payment">
              <button className="border border-white text-sm font-semibold bg-transparent text-white rounded-3xl pl-6 pr-6 h-7">
                Payment
              </button>
            </Link>
          </div>
        </motion.nav>

        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className=" hidden lg:flex border-b pt-3 pb-3 items-center justify-between xl:justify-around w-full  border-opacity-50">
            <div className="w-auto">
              <div className="flex items-center">
                <div className="text-white font-semibold text-xl">
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
        </motion.div>

        {/* for menu btn */}
        {showMenuButton && <MenuBtnPage />}
      </div>
    </>
  );
}

export default NavigationBar;

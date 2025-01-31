import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// UI icons
import EmailIcon from "@mui/icons-material/Email";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TranslateSharpIcon from "@mui/icons-material/TranslateSharp";

// Local modules
import NavbarCss from "./Navbar.module.css";
import {
  HomeDropDown,
  AuctionsDropDown,
  BlogDropDown,
  PagesDropDown,
  Contact,
} from "./DropdownLlist";
import InputBox from "./Input_Box";
import MiddleData from "./MiddleData";
import MenuBtnPage from "./MenuBtnPage";

function Navbar() {
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
        {/* 🔥 Navbar Animation - Top Left Entry */}
        <motion.nav
          className="hidden lg:flex pt-3 pb-3 items-center justify-evenly border-b border-white border-opacity-50"
          initial={{ x: "-100%", y: "-100%", opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
          </div>
        </motion.nav>

        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="hidden lg:flex sm:border-4 pt-3 pb-3 items-center justify-around w-full border border-white border-opacity-50">
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

        {/* 🔥 MiddleData Animation - Bottom Entry */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          <MiddleData />
        </motion.div>
      </div>
      
    </>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import InputCheckforMenu from "./Input_Box_for_menu";

export default function MenuBtnPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(
    window.innerWidth < 1024
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setShowMenuButton(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {showMenuButton && (
        <div className="relative p-0 menu_button ">
          {/* Menu Button */}
          <div className="flex items-end justify-between text-2xl">
            <img
              src="https://probid-nextjs.vercel.app/assets/img/logo-white.svg"
              alt="main-logo"
            />
            <button
              onClick={handleToggle}
              className="relative flex flex-col justify-between w-10 h-10 p-2 rounded-md"
              aria-label="Menu Button"
            >
              {/* Top Line */}
              <div
                className={`h-1 w-[100%] bg-white transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              {/* Middle Line */}
              <div
                className={`h-1 w-[80%] bg-white transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              {/* Bottom Line */}
              <div
                className={`h-1 w-[100%] bg-white transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-3" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Sidebar with Animation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: "-100vh", opacity: 0 }} // Start position (top se enter hoga)
                animate={{ y: 0, opacity: 1 }} // Final position
                exit={{ y: "-100vh", opacity: 0 }} // Exit animation
                transition={{ duration: 0.6, ease: "easeOut" }} // Animation speed
                className="fixed top-0 left-0 h-full bg-blue-500 text-white transition-transform duration-500"
                style={{ width: "300px" }}
              >
                <div className="bg-gray-300 min-h-[100vh] flex flex-col items-center p-4 ">
                  <div className="flex items-center space-x-3 mb-6">
                    <img
                      src="https://probid-nextjs.vercel.app/assets/img/logo-white.svg"
                      alt="main-logo"
                    />
                  </div>

                  {/* List with Anchor Tags */}
                  <ul className="space-y-5 mt-5 w-full">
                    <li className="flex justify-between">
                      <a
                        href="https://probid-nextjs.vercel.app/"
                        className="text-lg text-black font-semibold hover:underline hover:text-blue-800"
                      >
                        Home
                      </a>
                      <AddIcon className="text-black" />
                    </li>
                    <li className="flex justify-between">
                      <a
                        href="https://probid-nextjs.vercel.app/gadget-and-technology/auction-grid"
                        className="text-lg text-black font-semibold w-auto hover:underline hover:text-blue-800"
                      >
                        Auctions
                      </a>
                      <AddIcon className="text-black" />
                    </li>
                    <li className="flex justify-between">
                      <a
                        href="https://probid-nextjs.vercel.app/gadget-and-technology/blog-grid"
                        className="text-lg text-black font-semibold w-auto hover:underline hover:text-blue-800"
                      >
                        Blog
                      </a>
                      <AddIcon className="text-black" />
                    </li>
                    <li className="flex justify-between">
                      <a
                        href="#pages"
                        className="text-lg text-black font-semibold w-auto hover:underline hover:text-blue-800"
                      >
                        Pages
                      </a>
                      <AddIcon className="text-black" />
                    </li>
                    <li>
                      <a
                        href="https://probid-nextjs.vercel.app/gadget-and-technology/contact"
                        className="text-xl text-black font-semibold w-auto hover:underline hover:text-blue-800"
                      >
                        Contact
                      </a>
                    </li>

                    <div className="flex flex-col gap-5">
                      <li className="mt-5 truncate break-words">
                        <div className="flex gap-2 text-lg font-semibold text-black tracking-wide">
                          <EmailOutlinedIcon />
                          <p>info@example.com</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2 text-lg text-black font-semibold tracking-wide">
                          <SupportAgentIcon />
                          <p>info@example.com</p>
                        </div>
                      </li>
                    </div>

                    <div className="flex gap-9">
                      <InputCheckforMenu />
                    </div>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

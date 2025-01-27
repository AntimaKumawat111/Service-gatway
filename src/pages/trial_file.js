import React from "react";
import { useState,useEffect } from "react";

export default function InputCheck() {

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

return(
  <>
 <div className="relative p-0 menu_button">
            {/* Menu Button */}
            <div className="flex items-end justify-end  m-5">
              <button
                onClick={handleToggle}
                className="relative flex flex-col justify-between w-10 h-10 p-2  rounded-md"
                aria-label="Menu Button"
              >
                {/* Top Line */}
                <div
                  className={`h-1 w-full bg-black transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-3" : ""
                  }`}
                ></div>
                {/* Middle Line */}
                <div
                  className={`h-1 w-full bg-black transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></div>
                {/* Bottom Line */}
                <div
                  className={`h-1 w-full bg-black transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-3" : ""
                  }`}
                ></div>
              </button>
            </div>

            {/* Sidebar */}
            <div
              className={`fixed top-0 left-0 h-full bg-blue-500 text-white transition-transform duration-500 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              style={{ width: "50%" }}
            >
              <div className="p-4">
                <h2 className="text-xl font-bold">Sidebar Content</h2>
                <p className="mt-2">This is your sliding sidebar content!</p>
              </div>
            </div>
          </div>

  </>
);
}
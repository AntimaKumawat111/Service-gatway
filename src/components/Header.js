import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold text-xl">MyWebsite</div>
          <div className="space-x-4 hidden md:flex">
            <Link 
              to="/" 
              className="text-white hover:bg-slate-600 px-4 py-2 rounded-md transition duration-300"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:bg-slate-600 px-4 py-2 rounded-md transition duration-300"
            >
              Services
            </Link>
            <Link 
              to="/registration" 
              className="text-white hover:bg-slate-600 px-4 py-2 rounded-md transition duration-300"
            >
              Register
            </Link>
            <Link 
              to="/payment" 
              className="text-white hover:bg-slate-600 px-4 py-2 rounded-md transition duration-300"
            >
              Payment
            </Link>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4">
            <Link 
              to="/" 
              className="text-white hover:bg-slate-600 px-4 py-2 rounded-md transition duration-300 mb-2"
              onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:bg-slate-600 px-4 py-2 rounded-md transition duration-300 mb-2"
              onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
            >
              Services
            </Link>
            <Link 
              to="/registration" 
              className="text-white hover:bg-slate-600 px-4 py-2 rounded-md transition duration-300 mb-2"
              onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
            >
              Register
            </Link>
            <Link 
              to="/payment" 
              className="text-white hover:bg-slate-600 px-4 py-2 rounded-md transition duration-300 mb-2"
              onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
            >
              Payment
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;

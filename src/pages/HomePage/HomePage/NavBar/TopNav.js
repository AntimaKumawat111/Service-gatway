// import React from "react";

// function TopNav() {
//   return (
//     <>
//      <div className="border border-red-700">
//       hello
//      </div>
//     </>
//   );
// }

// export default TopNav;

// <div className="flex gap-9">
//           <div className="flex gap-5 items-center">
//             <button className="border border-white text-xs font-semibold bg-transparent text-white rounded-3xl pl-6 pr-6 h-7">
//               <a href="https://probid-nextjs.vercel.app/gadget-and-technology/how-to-buy">
//                 HOW TO BID
//               </a>
//             </button>
//             <button className="border border-white text-sm font-semibold bg-transparent text-white rounded-3xl pl-6 pr-6 h-7">
//               <a href="https://probid-nextjs.vercel.app/gadget-and-technology/how-to-buy">
//                 SELL YOUR ITEM
//               </a>
//             </button>
//           </div>
//           {/* Language Dropdown */}
//           <div className={NavbarCss.languageDropdown}>
//             <TranslateSharpIcon />
//             <button className={NavbarCss.dropdownBtn}>Languages</button>
//             <div className={NavbarCss.dropdownContent}>
//               <a href="#">English</a>
//               <a href="#">Deutsch</a>
//               <a href="#">Svenska</a>
//               <a href="#">unknown</a>
//               <a href="#">unknown</a>
//               <a href="#">Netherlands</a>
//             </div>
//           </div>
//           <div>
//             hope
//           </div>
//           <div>abc</div>
//         </div>
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import TranslateIcon from "@mui/icons-material/Translate";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

import NavbarCss from "./TopNav.module.css";

function TopNav() {
  return (
    <>
      <motion.nav
        className="border-4 border-green-700 hidden lg:flex pt-3 pb-3 items-center justify-evenly "
        initial={{ x: "-100%", y: "-100%", opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="border-4 border-red-700 flex gap-2">
          <div className="flex gap-2 text-sm">
            <EmailOutlinedIcon />
            <p>info@example.com</p>
          </div>

          <div className="w-0.5 h-7 ml-2 mr-2 rounded-full bg-white "></div>

          <div className="flex gap-2">
            <SupportAgentIcon />
            <p>info@example.com</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-9">
          <div className="flex gap-5 items-center">
            <button className="border border-black text-xs font-semibold bg-transparent text-black rounded-3xl pl-6 pr-6 h-7">
              <a href="https://probid-nextjs.vercel.app/gadget-and-technology/how-to-buy">
                HOW TO BID
              </a>
            </button>
            <button className="border border-black text-sm font-semibold bg-transparent text-black rounded-3xl pl-6 pr-6 h-7">
              <a href="https://probid-nextjs.vercel.app/gadget-and-technology/how-to-buy">
                SELL YOUR ITEM
              </a>
            </button>
          </div>
          {/* Language Dropdown */}
          <div className={NavbarCss.languageDropdown}>
            <TranslateIcon />
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
          {/* for route */}
          <div>
            <Link to="/register">
              <button>Join</button>
            </Link>
          </div>
          <div>
            <Link to="/payment">
              <button>payment</button>
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default TopNav;

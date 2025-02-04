import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";

function SocialMedia() {
  return (
    <>
      <div className="w-[80%] sm:w-[60%] lg:w-[45%] flex flex-col mb-6 justify-start">
        <div className="mb-3">
          <img
            src="https://probid-nextjs.vercel.app/assets/img/footer-logo-white.svg"
            alt="probid-logo"
          />
        </div>
        <div>
          <div className="py-3 ">
            <h1 className="font-semibold text-lg text-center">
              Social Just You Connected Us !
            </h1>
            <p className="text-center opacity-70">All of Update in Social</p>
          </div>
          <div className=" flex justify-around">
            <a
              href="https://in.linkedin.com/"
              rel="noopener noreferrer"
              style={{
                fontSize: "2rem",
                color: "#1877F2",
                textDecoration: "none",
              }}
            >
              <LinkedIn className=" text-white hover:text-blue-700 " />
            </a>
            <a
              href="https://www.facebook.com"
              rel="noopener noreferrer"
              style={{
                fontSize: "2rem",
                color: "#1877F2",
                textDecoration: "none",
              }}
            >
              <Facebook className=" text-white hover:text-blue-700 " />
            </a>
            <a
              href="https://x.com/?mx=2"
              rel="noopener noreferrer"
              style={{
                fontSize: "2rem",
                color: "#1877F2",
                textDecoration: "none",
              }}
            >
              <Twitter className=" text-white hover:text-blue-700 " />
            </a>
            <a
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              style={{
                fontSize: "2rem",
                color: "#1877F2",
                textDecoration: "none",
              }}
            >
              <Instagram className=" text-white hover:text-blue-700 " />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;

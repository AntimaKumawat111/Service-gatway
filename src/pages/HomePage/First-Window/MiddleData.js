import React from "react";
// UI icons
import FlareIcon from "@mui/icons-material/Flare";
import SouthEastIcon from "@mui/icons-material/SouthEast";
// Social Media Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

function MiddleData() {
  // Function to handle navigation
  const handleBidClick = () => {
    window.location.href =
      "https://probid-nextjs.vercel.app/gadget-and-technology/auction-grid";
  };

  const handleViewClick = () => {
    window.location.href =
      "https://probid-nextjs.vercel.app/gadget-and-technology/auction-grid";
  };

  return (
    <>
      <div
        className="w-full h-auto mt-24 flex flex-col lg:flex-row"
        style={{ marginTop: "2rem" }}
      >
        {/* social apps - hidden on small screens (900px or smaller) */}
        <div className="w-24 pt-4 pb-4 hidden lg:block">
          <ul className="flex flex-col items-center space-y-2 lg:p-9">
            {/* Facebook */}
            <li className="flex flex-col items-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FacebookIcon style={{ fontSize: "1.5rem" }} />
              </a>
              <span className="text-lg">•</span>
            </li>

            {/* Instagram */}
            <li className="flex flex-col items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <InstagramIcon style={{ fontSize: "1.5rem" }} className="target" />
              </a>
              <span className="text-lg">•</span>
            </li>

            {/* Pinterest */}
            <li className="flex flex-col items-center">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <PinterestIcon style={{ fontSize: "1.5rem" }} />
              </a>
              <span className="text-lg">•</span>
            </li>

            {/* Twitter */}
            <li className="flex flex-col items-center">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <TwitterIcon style={{ fontSize: "1.5rem" }} />
              </a>
            </li>
          </ul>
        </div>

        {/* center data */}
        <div className="flex flex-col ml-6 lg:ml-0 lg:flex-1">
          {/* here is button */}
          <div>
            <button className="uppercase bg-neutral-500 border pt-2 pb-2 pl-4 pr-4 text-xs font-semibold rounded-3xl flex items-center gap-2">
              <FlareIcon style={{ fontSize: "1rem" }} /> Probid you can trust
            </button>
          </div>
          {/* middle box data */}
          <div className="w-full md:w-3/4 xl:w-1/2 lg:w-3/4 mt-2">
            <h1 className="capitalize font-bold tracking-wider text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
              select our product at our auction.
            </h1>

            <p className="text-lg mt-5 mb-5">
              Join us as we carve a path to success, driven by passion, powered
              by innovation, and we're here to turn them into reality.
            </p>
            <div className="flex gap-5 flex-wrap">
              <button
                className="capitalize border pt-2 pb-2 pl-4 pr-4 text-lg font-semibold rounded-lg"
                onClick={handleBidClick}
              >
                Start a Bid <SouthEastIcon style={{ fontSize: "1.2rem" }} />
              </button>
              <button
                className="capitalize bg-blue-700 pt-2 pb-2 pl-4 pr-4 text-lg font-semibold rounded-lg"
                onClick={handleViewClick}
              >
                View all auctions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Media Queries for small screens */}
    </>
  );
}

export default MiddleData;

<style jsx>{`
  @media (max-width: 900px) {
    .border {
      margin-top: 1rem;
    }
    .flex {
      flex-direction: column;
      align-items: center;
    }
    .w-24 {
      width: 100%;
      padding: 1rem;
      display: flex;
      justify-content: center;
    }
    .flex-1 {
      width: 100%;
      padding: 1rem;
    }
    .text-lg {
      font-size: 1rem;
    }
    .text-4xl {
      font-size: 1.5rem;
    }
    .space-y-2 {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 300px) {
    .text-lg {
      font-size: 0.875rem;
    }
    .text-4xl {
      font-size: 1.25rem;
    }
    .border {
      padding: 0.5rem;
    }
    .flex {
      padding: 0.5rem;
    }
  }
`}</style>;

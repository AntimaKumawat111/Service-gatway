import React from "react";
import HorizontalCard from "./Horizontal_Card";
import VaricalCard from "./Vartical_Card";

function Active_Card2nd() {
  return (
    <div className=" flex justify-between  w-full gap-4 px-4">
      {/* Left Vertical Cards */}
      <div className="w-1/4 flex flex-col justify-between items-center gap-4">
        <VaricalCard
          url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img5.jpg"
          name="MasterPiece Masterplace Art Auction Extra"
          price="150.00"
        />
        <VaricalCard
          url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img2.jpg"
          name="MasterPiece Masterplace Art Auction Extra"
          price="150.00"
        />
      </div>

      {/* Center Horizontal Cards */}
      <div className="w-2/4 flex flex-col justify-between">
        <HorizontalCard
          url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img7.jpg"
          name="MasterPiece Masterplace Art Auction Extra"
          price="150.00"
        />
        <HorizontalCard
          url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img8.jpg"
          name="MasterPiece Masterplace Art Auction Extra"
          price="150.00"
        />
        <HorizontalCard
          url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img9.jpg"
          name="MasterPiece Masterplace Art Auction Extra"
          price="150.00"
        />
        <HorizontalCard
          url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img10.jpg"
          name="MasterPiece Masterplace Art Auction Extra"
          price="150.00"
        />
      </div>

      {/* Right Vertical Cards */}
      <div className="w-1/4 flex flex-col  justify-between items-center">
        <VaricalCard
          url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img3.jpg"
          name="MasterPiece Masterplace Art Auction Extra"
          price="150.00"
        />
        <VaricalCard
          url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img6.jpg"
          name="MasterPiece Masterplace Art Auction Extra"
          price="150.00"
        />
      </div>
    </div>
  );
}


export default Active_Card2nd;

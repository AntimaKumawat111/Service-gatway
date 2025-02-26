import React from "react";

// local component
import VaricalCard from "./Vartical_Card";
import HorizontalCard from "./Horizontal_Card";

function ActiveCards() {
  return (
    <div className=" h-auto w-full  ">
      {/* for smaller screen size of 900px */}
      <div>
        {/* vartical box */}
        <div className=" vartical_card card h-auto flex flex-wrap justify-between">
          <VaricalCard
            url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img5.jpg"
            name="MasterPiece Masterplace Art Auction Extra"
            price="150.00"
          />
          <VaricalCard
            url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img2.jpg"
            name="MasterPiece Masterplace Art Auction Extra"
            price="200.00"
          />
          <VaricalCard
            url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img3.jpg"
            name="MasterPiece Masterplace Art Auction Extra"
            price="175.50"
          />
          <VaricalCard
            url="https://probid-nextjs.vercel.app/assets/img/home5/auction-img6.jpg"
            name="MasterPiece Masterplace Art Auction Extra"
            price="300.00"
          />
        </div>

        {/* horizontal box */}
        <div className="hidden horizontal flex flex-col flex-wrap">
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
      </div>
    </div>
  );
}

export default ActiveCards;

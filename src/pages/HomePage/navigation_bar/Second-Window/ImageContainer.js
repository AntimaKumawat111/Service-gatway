import React from "react";
// import { useState } from "react";

export default function ImageContainer() {
  return (
    <>
      <div className="border border-black p-4 flex flex-wrap">
        <Card
          url={
            "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          name={"MasterPiece Masterplace Art Auction Extra"}
          price={"500"}
        />
        <Card 
        url={'https://www.openaccessgovernment.org/wp-content/uploads/2023/08/iStock-1366040332-scaled.jpg'}
        />
        <Card 
        url={'https://m.media-amazon.com/images/I/91mLupiNgFL.jpg'}
        />
      </div>
    </>
  );
}
export function Card({ url, name, price }) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white">
      {/* Image Section */}
      <img
        className="w-full h-56 object-cover rounded-t-xl"
        src={url}
        alt={name}
      />

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>

        {/* Price & Button Container */}
        <div className="flex items-center justify-between mt-4">
          {/* Price Section */}
          <div>
            <p className="text-sm text-gray-500">Current Bid</p>
            <h3 className="text-lg font-semibold text-gray-800">${price}</h3>
          </div>

          {/* Button */}
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition-all duration-200">
            Bid Now
          </button>
        </div>
      </div>
    </div>
  );
}

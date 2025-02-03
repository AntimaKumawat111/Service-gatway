import React from "react";

export default function Card({url}) {
  return (
    <>
      <div className= "h-14 w-auto px-8 mt-5">
        <img
          src={url}
          alt="cardimage"
          className="border"
        />
      </div>
    </>
  );
}

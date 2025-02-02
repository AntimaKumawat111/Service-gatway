import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function VaricalCard({ url, name, price }) {
  return (
    <div className="flex gap-1 justify-between items-center w-full">
      <Card
        className="group transition-transform duration-300 ease-in-out hover:scale-100 relative"
        sx={{ maxWidth: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
      >
        <CardActionArea
          onClick={() =>
            (window.location.href = "https://probid-nextjs.vercel.app/gadget-and-technology/auction-details")
          }
        >
          {/* Card Image */}
          <CardMedia
            component="img"
            image={url}
            alt="image"
            className="h-42 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 lg:h-40 xl:h-46"
          />

          {/* Icons */}
          <div
            className="absolute flex flex-col top-2 right-2 z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            style={{ display: "flex", gap: "6px" }}
          >
            <FavoriteBorderIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white text-sm sm:text-base" />
            <RemoveRedEyeOutlinedIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white text-sm sm:text-base" />
          </div>

          {/* Content */}
          <CardContent className="lg:mt-6 xl:mt-11">
            <Typography gutterBottom variant="div" component="div" className=" text-sm lg:text-sm xl:text-lg w-full text-start font-semibold">
              {name}
            </Typography>

            <div className="w-full flex justify-between items-center mt-2">
              {/* Price Section */}
              <div className="w-auto flex flex-col">
                <p className="text-xs sm:text-sm text-gray-500">Current Bid</p>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">${price}</h3>
              </div>

              {/* Buy Now Button */}
              <div className="rounded-2xl px-2 text-center py-2 border border-blue-800 bg-blue-500 hover:bg-green-500 text-white cursor-pointer text-xs sm:text-sm">
                Buy Now
              </div>
            </div>
          </CardContent>

          {/* Countdown Timer */}
          {/* <CardContent
            className="absolute top-8 md:top-14 lg:top-32 left-1/2 transform -translate-x-1/2 
             bg-white rounded-full border border-black shadow-md w-full h-12 xl:top-40
             flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
          >
            <div className="flex gap-1 sm:gap-2">
              {["00", "00", "00"].map((value, index) => (
                <div key={index} className="flex flex-col items-center justify-center w-12 h-10 sm:w-16 sm:h-12 rounded">
                  <span className="text-[10px] sm:text-[12px] font-semibold text-gray-800 px-1 py-0.5 rounded">{value}</span>
                  <span className="text-[8px] sm:text-[10px] text-gray-500">{["Day", "Hr", "Min"][index]}</span>
                </div>
              ))}
            </div>
          </CardContent> */}
        </CardActionArea>
      </Card>
    </div>
  );
}

export default VaricalCard;

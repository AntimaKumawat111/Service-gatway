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
    <div className="flex justify-center gap-1 items-center w-full">
      <Card
        className=" group transition-transform duration-300 ease-in-out hover:scale-100 relative"
        sx={{
          maxWidth: "100%",
          // minHeight:'10vh' ,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea>
          {/* Card Image */}
          <CardMedia
            component="img"
            height="80"
            image={url}
            alt="image"
            className="h-46 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />

          {/* Icons */}
          <div
            className=" absolute flex flex-col top-2 right-2 z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            style={{
              display: "flex",
              gap: "6px",
            }}
          >
            <FavoriteBorderIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white text-sm sm:text-base" />
            <RemoveRedEyeOutlinedIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white text-sm sm:text-base" />
          </div>

          {/* Content */}
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-xs w-full text-start font-extralight lg:pt-3 xl:p-0"
            >
              {name}
            </Typography>

            <div className="w-full flex justify-between items-center mt-2">
              {/* Price Section */}
              <div className="w-auto flex flex-col">
                <p className="text-xs sm:text-sm text-gray-500">Current Bid</p>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                  ${price}
                </h3>
              </div>

              {/* Buy Now Button */}
              <div className="rounded-2xl px-2 text-center py-1 border-black bg-blue-500 hover:bg-green-500 text-white cursor-pointer text-xs sm:text-sm">
                Buy Now
              </div>
            </div>
          </CardContent>

          {/* Countdown Timer */}
          <CardContent
            className="group-hover:opacity-0 transition-opacity duration-300 ease-in-out absolute lg:top-28
            xl:top-[9.1rem] 2xl:top-[10rem] left-1/2 transform -translate-x-1/2 lg:-translate-y-[20%] xl:-translate-y-[25%] 
            w-10/12 bg-white rounded-2xl p-2 flex justify-around  h-16"
          >
            {["00", "00", "00"].map((value, index) => (
              <Typography
                key={index}
                className="flex flex-col"
                gutterBottom
                variant="body2"
                component="h6"
              >
                {/* <h6 className="text-xs sm:text-sm flex flex-col items-center"> */}
                <span>{value}</span> day
                {/* </h6> */}
              </Typography>
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default VaricalCard;

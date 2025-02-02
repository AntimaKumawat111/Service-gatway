import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function HorizontalCard({ url, name, price }) {
  return (
    <div className="w-[43vw]">
      <Card
        className="group hover:scale-105 relative  lg:h-36  "
        sx={{
          width: "100%",
          maxHeight: 200, // Set max height
          // minHeight: 100,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          position: "relative",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
          overflow: "hidden", // Hide overflow
        }}
      >
        {/* Left Image */}
        <div className="relative w-1/2 flex">
          <CardMedia
            component="img"
            image={url}
            alt="image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: { xs: "12px 12px 0 0", sm: "12px 0 0 12px" },
            }}
          />
          {/* Time Data */}
          {/* <CardContent className="border border-black absolute left-1/2 bottom-0 h-[2.8rem] ml-2 w-auto transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-1 flex items-center justify-center">
            <div className="flex gap-1">
              {["00", "00", "00"].map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-10 h-10 overflow-hidden"
                >
                  <Typography
                    component="div"
                    className="text-[10px]  h-4 p-0 m-0 flex items-center justify-center"
                  >
                    {value}
                  </Typography>
                  <Typography
                    component="div"
                    className="text-[8px]  h-3 p-0 m-0 flex items-center justify-center"
                  >
                    {["day", "hr", "min"][index]}
                  </Typography>
                </div>
              ))}
            </div>
          </CardContent> */}
        </div>

        {/* Right Content */}
        <CardActionArea sx={{ flexGrow: 1 }}>
          <div className="absolute flex flex-col top-2 right-2 z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <FavoriteBorderIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white" />
            <RemoveRedEyeOutlinedIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white" />
          </div>

          {/* paragraphs */}
          <CardContent className=" p-0 m-0">
            <Typography
              variant="div"
              className="text-gray-800 w-full md:text-lg xl:text-2xl "
            >
              {name}
            </Typography>
            <div className="flex justify-between items-center mt-2 ">
              <div>
                <p className="text-sm text-gray-500">Current Bid</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  ${price}
                </h3>
              </div>
              <div className="rounded-lg px-3 py-1 bg-blue-500 hover:bg-green-500 text-white cursor-pointer">
                Buy Now
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default HorizontalCard;

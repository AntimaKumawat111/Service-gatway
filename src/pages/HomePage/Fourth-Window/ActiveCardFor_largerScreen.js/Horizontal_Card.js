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
    <div className=" p-2 w-[40vw] flex  lg:p-0">
      <Card
        className="group transition-transform duration-300 ease-in-out hover:scale-105 relative"
        sx={{
          width: "100%",
          maxHeight: 200, // Set max height
          minHeight: 100,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          position: "relative",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
          overflow: "scroll", // Hide overflow
        }}
      >
        {/* Left Image */}
        <div className="relative w-full sm:w-2/5">
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
          <CardContent className="absolute left-1/2 bottom-2 transform -translate-x-1/2 bg-white rounded-lg px-2 py-1 text-center shadow-lg">
            <div className="flex justify-center gap-2">
              {["00", "00", "00"].map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Typography variant="h6">{value}</Typography>
                  <Typography variant="body2">
                    {["day", "hr", "min"][index]}
                  </Typography>
                </div>
              ))}
            </div>
          </CardContent>
        </div>

        {/* Right Content */}
        <CardActionArea sx={{ flexGrow: 1, padding: "1.5rem" }}>
          <div className="absolute flex flex-col top-2 right-2 z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <FavoriteBorderIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white" />
            <RemoveRedEyeOutlinedIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white" />
          </div>

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              className="text-gray-800 w-full text-sm font-bold"
            >
              {name}
            </Typography>
            <div className="flex justify-between items-center mt-2">
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

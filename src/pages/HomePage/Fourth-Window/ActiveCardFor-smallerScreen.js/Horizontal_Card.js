import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function HorizontalCard({ url, name }) {
  return (
    <div className=" p-2 flex justify-center items-center">
      <Card
        className="group transition-transform duration-300 ease-in-out hover:scale-105 relative"
        sx={{
          width: "100%",
          minHeight: 200,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Vertical for small screens, horizontal for large
          position: "relative",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Adding shadow for large screens
          borderRadius: "12px", // Adding rounded corners
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
              borderRadius: "12px 0 0 12px", // Rounded corners for the left image
            }}
          />
          {/* Time Data (Placed at Image Bottom) */}
          <CardContent
            className="absolute w-[90%] left-1/2 bottom-2 transform -translate-x-1/2 bg-white  rounded-lg px-2 py-1 text-center shadow-lg"
            sx={{
              display: "flex",
              flexDirection: "row", // Time box in a row
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              paddingTop: "2rem",
              paddingBottom: "3rem",
              height: "4rem",
              width: "100%",
              borderRadius: "8px", // Rounded corners for the time box
            }}
          >
            {/* Time Data in Column for each time unit */}
            {["00", "00", "00", "00"].map((value, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div">
                  <span>{value}</span>
                </Typography>
                <Typography variant="h6" component="div">
                  <span>{["day", "hr", "min", "sec"][index]}</span>{" "}
                </Typography>
              </div>
            ))}
          </CardContent>
        </div>

        {/* Right Content */}
        <CardActionArea
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem", // Increased padding for large screens
            "@media (min-width:640px)": {
              width: "22rem", // Increased width for large screens
              paddingTop: "1.5rem", // Consistent padding
              paddingRight: "1.5rem",
              paddingBottom: "1.5rem",
            },
          }}
        >
          {/* Icons in top right corner */}
          {/* Icons in top right corner */}
          <div className="absolute top-2 right-2 z-10 flex flex-col gap-2 transition-opacity duration-300 ease-in-out lg:opacity-0 lg:group-hover:opacity-100">
            <FavoriteBorderIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white" />
            <RemoveRedEyeOutlinedIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white" />
          </div>

          {/* Content */}
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              flexGrow: 1,
              padding: "0",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-sm md:text-lg w-full text-start font-bold text-gray-800"
            >
              {name}
            </Typography>

            <div className="w-full flex flex-row justify-between items-center mt-2">
              {/* Price Section */}
              <div className="w-auto flex flex-col">
                <p className="text-xs sm:text-sm text-gray-500">Current Bid</p>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                  $price
                </h3>
              </div>

              {/* Buy Now Button */}
              <div className="rounded-lg px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer">
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

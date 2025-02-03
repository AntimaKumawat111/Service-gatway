import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function MovingCards({ url, name }) {
  return (
    <div className="p-2 flex justify-center items-center">
      <Card
        className=" group transition-transform duration-300 ease-in-out hover:scale-100 relative"
        sx={{
          maxWidth: 345,
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          "@media (max-width:550px)": {
                maxWidth:450,
                minHeight:150,
                // padding: "0",
                // paddingTop: "1rem",
              },
        }}
      >
        <CardActionArea>
          {/* Card Image */}
          <CardMedia
            component="img"
            height="140"
            image={url}
            alt="image"
            className=" h-54 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sx={{
              position: "relative", // To position icons within this container
            }}
          />

          {/* Icons in top right corner */}
          <div
            className="absolute flex flex-col top-2 right-2 z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            style={{ display: "flex", gap: "8px", fontSize: "10px" }}
          >
            <FavoriteBorderIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white" />
            <RemoveRedEyeOutlinedIcon className="text-green bg-gray-500 border border-black rounded-full p-0.5 hover:bg-black hover:text-white" />
          </div>

          {/* Content */}
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              marginTop: "1rem",
              "@media (max-width:300px)": {
                padding: "0",
                paddingTop: "1rem",
              },
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-sm md:text-lg w-full text-start font-bold text-gray-800"
              sx={{
                "@media (max-width:1200px)": {
                  width: "100%",
                  fontSize: "1.2rem",
                },
                "@media (max-width:900px)": {
                  fontSize: "1.2rem",
                },
                "@media (max-width:700px)": {
                  fontSize: "1rem",
                },
                "@media (max-width:300px)": {
                  fontSize: "0.8rem",
                  letterSpacing: "0.5px",
                },
              }}
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
               Notify Me
              </div>
            </div>
          </CardContent>

          {/* Time CardContent */}
          <CardContent
            className="group-hover:opacity-0 group-hover:invisible transition-opacity duration-300 ease-in-out"
            sx={{
              height: "3.5rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              position: "absolute",
              top: "42%",
              transform: "translate(-50%, -50%)",
              left: "50%",
              width: "90%",
              backgroundColor: "white",
              gap: "1rem",
              borderRadius: "2rem",
              "@media (max-width:900px)": {
                top: "50%", // 990px ya usse kam ke liye chhota size
              },
              "@media (max-width:700px)": {
                top: "45%", // 990px ya usse kam ke liye chhota size
              },
              "@media (max-width:550px)": {
                top: "55%", // 990px ya usse kam ke liye chhota size
              },
              "@media (max-width:300px)": {
                top: "50%", // 990px ya usse kam ke liye chhota size
              },
            }}
          >
            {["00", "00", "00"].map((value, index) => (
              <Typography
                key={index}
                gutterBottom
                variant="h5"
                component="div"
                className="tracking-wide"
              >
                <h6 className="text-sm flex flex-col items-center">
                  <span>{value}</span> day
                </h6>
              </Typography>
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default MovingCards;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

// LOCAL MODULES
import "../../../../App.css";

function VaricalCard({ url, name }) {
  return (
    <div className=" p-1 sm:p-1 flex sm:flex-wrap justify-evenly items-center  ">
      <Card
        className="group transition-transform duration-300 ease-in-out hover:scale-100 relative"
        sx={{
          maxWidth: 250,
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          "@media (max-width:500px)": {
            maxWidth: "100%", // Full width on smaller screens
          },
          "@media (min-width:501px)": {
            maxWidth: "40vw", // Half of 90vw for larger screens
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

              // "@media(max-width:300px":{
              //   maxWidth:'100%'
              // }
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
              // marginTop: "1rem",
              "@media (max-width:300px)": {
                padding: "0",
                paddingTop: "1rem",
              },
              // "@media (max-width:500px)": {
              //   padding: "0",
              //   marginTop: "0",
              // },
              "@media (min-width:400px)": {
                padding: "0",
                paddingTop: "0",
                margin: "0",
              },
            }}
          >
            <Typography
              gutterBottom
              variant="div"
              component="div"
              className="text-lg sm:text-xl md:text-lg w-full text-start font-bold text-gray-800"
              sx={{
                "@media (max-width:300px)": {
                  fontSize: "1rem",
                },
                "@media (max-width:500px)": {
                  fontSize: "1.3rem",
                  font: "bold",
                  letterSpacing: "0.4px",
                  lineHeight: "1.6rem",
                },
                "@media (max-width:600px)": {
                  fontSize: "1.2rem",
                  letterSpacing: "0",
                  lineHeight: "1.6rem",
                },
              }}
            >
              {name}
            </Typography>

            <div className="pragraphBoxFourthWindow w-full flex flex-row justify-between items-center mt-2 ">
              {/* Price Section */}
              <div className="w-auto flex flex-col">
                <p className="text-lg sm:text-sm text-gray-500">Current Bid</p>
                <h3 className="text-lg sm:text-lg font-semibold text-gray-800">
                  $price
                </h3>
              </div>

              {/* Buy Now Button */}
              <div className="rounded-lg px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer">
                Buy Now
              </div>
            </div>
          </CardContent>

          {/* TIME DATA */}
          {/* <CardContent
            className="timeData_mainBox  
             bg-white 
             "
          >
            <div className="timeData_time flex gap-1 sm:gap-2">
              {["00", "00", "00"].map((value, index) => (
                <Typography
                  key={index}
                  gutterBottom
                  variant="div"
                  component="div"
                  className="tracking-wide"
                >
                  <h6 className="timeData_para text-xs md:text-sm flex flex-col items-center">
                    <span>{value}</span> day
                  </h6>
                </Typography>
              ))}
            </div>
          </CardContent> */}
        </CardActionArea>
      </Card>
    </div>
  );
}

export default VaricalCard;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function MovingCards({ name, paragraph, firstValue, secondValue,step }) {
  return (
    <div className="flex flex-col m-auto justify-center p-2 w-full">
      <div className="mb-4">
      <button className="border border-blue-700 bg-blue-600 px-6 py-1 rounded-2xl capitalize text-white tracking-wide hover:bg-blue-800" >{step}</button>
      </div>
      <Card
        sx={{
          maxWidth: 350,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          ":hover": { backgroundColor: "lightblue" },
          position: "relative",
          padding: "15px",
          // Corrected media query syntax
          "@media (max-width: 600px)": {
            padding: "5px",
            maxWidth: "100%",
          },
        }}
      >
        <CardActionArea>
          <CardContent
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="w-full capitalize"
            >
              {name}
            </Typography>

            {/* Adjusted Arrow Icon Position */}

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                marginTop: "0.5rem",
                marginBottom: "1rem",
                height: "auto",
                width: "100%",
              }}
            >
              {paragraph}
            </Typography>
            <Typography>
              <span className="capitalize tracking-tight font-extralight py-1 mb-1 sm:tracking-normal  w-full ">
                <span className="font-semibold">01.</span> {firstValue}
              </span>
            </Typography>
            <Typography>
              <span className="capitalize tracking-tight font-extralight py-1 mb-1 sm:tracking-normal  w-full ">
                <span className="font-semibold">02.</span> {secondValue}
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default MovingCards;

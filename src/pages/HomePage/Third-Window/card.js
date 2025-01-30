import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function ActionAreaCard({ url, name }) {
  const handleClick = () => {
    window.open("https://probid-nextjs.vercel.app/gadget-and-technology/auction-sidebar", "_blank");
  };

  return (
    <div className="card-box p-4 ">
      <Card
        sx={{
          maxWidth: 300,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          ":hover": { backgroundColor: "lightblue" },
          "@media (max-width:600px)": {
            maxWidth: 680,
            minHeight: 250,  // Further increased height for more spacing
            width: "100%",
          },
          position: "relative",
          padding:'15px'
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={url}
            alt="green iguana"
            className="h-54 object-cover"
          />
          <CardContent
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              marginTop: "1rem",
              position: "relative",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                "@media (max-width:600px)": {
                  width: "100%",
                  fontSize: "1.7rem",
                  textAlign: "center",
                },
                "@media (max-width:300px)": {
                  fontSize: "1.2rem",
                },
              }}
            >
              {name}
            </Typography>

            {/* Adjusted Arrow Icon Position */}
            <Typography
              sx={{
                position: "absolute",
                bottom: "-15px", // Reduced this to keep arrow close but not outside
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                // padding: "5px",
                borderRadius: "40px",
                outline:'1px solid #B2B6BA',
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Added a subtle shadow for better visibility
                ":hover":{
                    backgroundColor:'blue'
                  }
              }}
              className="arrow-container"
            >
              <ArrowRightAltIcon
                sx={{
                  // fontSize: "3rem",
                  fontSize:'large',
                  marginLeft:'12px',
                  marginRight:'12px',
                  backgroundColor:'transparent',
                  color:'#B2B6BA',
                }}
                onClick={handleClick}
              />
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                marginTop: "0.5rem",
                marginBottom:'2rem', // Increased margin to create space between text and arrow
                textAlign: "start",
                width: "100%",
                textAlign:'center',
              }}
            >
              45,533 Item
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

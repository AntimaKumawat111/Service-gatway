import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SouthEastIcon from "@mui/icons-material/SouthEast";

export default function ActionAreaCard({
  productName,
  totalComments,
  heading,
  url,
  paragraph,
}) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 400,
          marginBottom: "1rem",
          "@media (max-width:650px)": {
            maxWidth: "90%",
            marginBottom: 0,
          },
        }}
      >
        <div>
          <CardContent>
            <Typography
              gutterBottom
              variant="div"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p className="text-xs capitalize font-medium text-blue-500">
                {productName}
              </p>
              <span>.</span>
              <p className="text-xs capitalize font-normal opacity-80">
                Comments ({totalComments})
              </p>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <h6>{heading}</h6>
            </Typography>

            <CardMedia
              component="img"
              height="140"
              image={url}
              alt="first"
              className="h-44"
            />
            <Typography variant="div" component="div">
              {paragraph}
            </Typography>
            <Button
              onClick={() =>
                (window.location.href =
                  "https://probid-nextjs.vercel.app/blog-details")
              }
              className="capitalize underline"
            >
              Read More
              <SouthEastIcon className="border rounded-full ml-1 hover:bg-blue-200 hover:-rotate-45" />{" "}
            </Button>
          </CardContent>
        </div>
      </Card>
    </>
  );
}

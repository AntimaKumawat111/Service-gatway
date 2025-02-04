import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";


export default function ActionAreaCard({
  heading,
  url,
  name,
  paragraph,
  date,
  time,
}) {
  return (
    <Card 
    className=""
      sx={{
        maxWidth: 545,
        margin: "5px",
        padding: "0.5rem",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="div" component="div">
            {heading}
          </Typography>
          <Typography variant="div" sx={{ color: "text.secondary" }}>
            "{paragraph}"
          </Typography>
        </CardContent>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="m-2">
              <CardMedia
                component="img"
                image={url}
                alt={name}
                className="rounded-full w-16 h-16 object-cover" // Ensure the image is 64px x 64px (LinkedIn-like profile pic)
              />
            </div>
            <div>
              <Typography
                gutterBottom
                variant="div"
                component="div"
                sx={{
                  fontSize: "1rem",
                  text: "bold",
                }}
              >
                {name}
              </Typography>
              <Typography
                gutterBottom
                variant="div"
                component="div"
                className="text-xs xl:text-lg"
              >
                CEO At astra.com
              </Typography>
            </div>
          </div>
          <CardContent>
            <div className="flex">
              <div className="text-end">
                <Typography
                  gutterBottom
                  variant="div"
                  component="div"
                  className="text-sm"
                >
                  {date}
                </Typography>
                <Typography
                  gutterBottom
                  variant="div"
                  component="div"
                  className="text-sm"
                >
                  {time}
                </Typography>
              </div>
            </div>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}

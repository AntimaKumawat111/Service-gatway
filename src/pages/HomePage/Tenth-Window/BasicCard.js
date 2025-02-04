import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ name, paragraph }) {
  return (
    <Card
      sx={{
        width: "24%",
        backgroundColor: 	'#eff6ff',
        minWidth: 200,
        "@media (max-width: 1024px)": {
          width: "48%",
        },
        "@media (max-width: 600px)": {
          width: "100%",
        },
        margin: "auto",
      }}
    >
      <CardContent>
        <Typography
          variant="div"
          component="div"
          sx={{
            fontWeight: "600",
            letterSpacing: "0.05em",
            fontSize: { xl: "1.25rem" },
            marginBottom: 2,
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="div"
          sx={{
            marginBottom: 5,
          }}
        >
          {paragraph}
        </Typography>
      </CardContent>
    </Card>
  );
}

import React from "react";
import Typography from "@mui/material/Typography";
export default function Footer() {
  return (
    <div>
      <Typography
        component="p"
        variant="p"
        sx={{
          color: "#f9f9f9",
          "text-shadow": "1px 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        Developed by <a href="#">Pramod Boda</a>
      </Typography>
    </div>
  );
}

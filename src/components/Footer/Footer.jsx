import React from "react";
import Typography from "@mui/material/Typography";
export default function Footer() {
  return (
    <div className="footer">
      <Typography
        component="p"
        variant="body2"
        sx={{
          color: "#f9f9f9",
          // "textShadow": "1px 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        Developed by <a href="#">Pramod Boda</a>
      </Typography>
    </div>
  );
}

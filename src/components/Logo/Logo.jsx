import React from "react";

import Typography from "@mui/material/Typography";

export default function Logo() {
  return (
    <Typography
      className="dm-serif-text-regular"
      component="h5"
      variant="h5"
      sx={{
        color: "#f9f9f9",
        fontSize: "1.8rem",
        "text-shadow": "1px 2px 2px rgba(0,0,0,0.3)",
      }}
    >
      Pramodize
    </Typography>
  );
}

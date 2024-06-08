import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

const CardContentNoPadding = styled(CardContent)(`&:last-child{
  padding-bottom:16px;
}`);

export default function DailyCard() {
  return (
    <>
      <Box>
        <Card className="common-card" variant="outlined">
          <CardContentNoPadding></CardContentNoPadding>
        </Card>
      </Box>
    </>
  );
}

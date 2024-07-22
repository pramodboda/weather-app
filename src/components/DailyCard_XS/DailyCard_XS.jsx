import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import "./DailyCard_XS.css";

import { styled } from "@mui/material/styles";

const CardContentNoPadding = styled(CardContent)(`&:last-child{
  padding-bottom:16px;
}`);

export default function DailyCard(props) {
  return (
    <>
      <Box textAlign="center">
        <Card
          className=""
          variant="outlined"
          textAlign="center"
          sx={{ borderRadius: ".5rem" }}
        >
          <CardContentNoPadding>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0.2}
            >
              <Typography
                sx={{ fontSize: "0.7rem", textTransform: "uppercase" }}
                color="text.secondary"
                gutterBottom
              >
                {props.day}
              </Typography>
              <Box className="icon-img">
                <img src={props.icon} alt="weather icon img" />
              </Box>
              <Typography variant="body" sx={{ fontWeight: 500 }}>
                {props.temp}
              </Typography>
            </Stack>
          </CardContentNoPadding>
        </Card>
      </Box>
    </>
  );
}

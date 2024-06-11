import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./DailyCard.css";

import { styled } from "@mui/material/styles";

const CardContentNoPadding = styled(CardContent)(`&:last-child{
  padding-bottom:16px;
}`);

export default function DailyCard(props) {
  return (
    <>
      <Box textAlign={"center"}>
        <Card className="" variant="outlined">
          <CardContentNoPadding>
            <Typography
              className="card-title"
              //   sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.day}
            </Typography>
            <Box className="icon-img">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon img"
              />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {props.temp}
            </Typography>
          </CardContentNoPadding>
        </Card>
      </Box>
    </>
  );
}

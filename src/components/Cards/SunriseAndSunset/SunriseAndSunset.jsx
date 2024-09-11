import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";

// import { styled } from "@mui/material/styles";

// const CardContentNoPadding = styled(CardContent)(`&:last-child{
//   padding-bottom:16px;
// }`);

export default function SunriseAndSunset({ weather: { sunrise, sunset } }) {
  return (
    <Box>
      <Card className="common-card" variant="outlined">
        <CardContent>
          <Box>
            <Typography
              className="card-title"
              //   sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              sunrise and sunset
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignContent="center"
              pt={1.75}
            >
              <Box
                display="flex"
                justifyContent={"space-between"}
                alignItems="center"
                pb={1}
              >
                <WiSunrise size="1.5rem" />
                <Typography
                  className="item-value"
                  variant="body2"
                  component="span"
                >
                  Sunrise
                </Typography>
                <Typography className="item-value" variant="h6" component="h6">
                  {sunrise}
                </Typography>
              </Box>
              <Divider />
              <Box
                display="flex"
                justifyContent={"space-between"}
                alignItems="center"
                pt={1}
              >
                <WiSunset size="1.5rem" />
                <Typography
                  className="item-value"
                  variant="body2"
                  component="span"
                >
                  Sunset
                </Typography>
                <Typography className="item-value" variant="h6" component="h6">
                  {sunset}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography> */}
          <Typography variant="body2" component="p">
            {/* {props.msg} */}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

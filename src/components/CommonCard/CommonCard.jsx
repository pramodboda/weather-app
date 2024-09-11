import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

const CardContentNoPadding = styled(CardContent)(`&:last-child{
  padding-bottom:16px;
}`);

export default function CommonCard(props) {
  return (
    <Box>
      <Card className="common-card" variant="outlined">
        <CardContentNoPadding>
          <div>
            <Typography
              // className="card-title"
              sx={{ lineHeight: "1.3" }}
              component="p"
              variant="overline"
              color="text.secondary"
              gutterBottom
            >
              {props.name}
            </Typography>
            <Typography className="item-value" variant="h5" component="h5">
              {props.value}
            </Typography>
            <div>{props.content}</div>
            <Typography variant="body2" component="p">
              {props.valueDescription}
            </Typography>
          </div>

          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography> */}
          <Typography variant="body2" component="p">
            {props.msg}
          </Typography>
        </CardContentNoPadding>
      </Card>
    </Box>
  );
}

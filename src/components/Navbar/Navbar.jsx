// import React from "react";

// import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
// import useScrollTrigger from "@mui/material/useScrollTrigger";

// import DarkLightModeBtn from "./DarkLightModeBtn";

import Logo from "../Logo/Logo";
import CurrentTime from "../CurrentTime/CurrentTime";

export default function NavBar(props) {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            width="100%"
          >
            <Logo />
            <CurrentTime weather={props.weather} />
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

// export default function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

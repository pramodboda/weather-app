import React, { createContext, useState, useMemo } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepPurple, grey, blue } from "@mui/material/colors";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeContextProvider = ({ children }) => {
  // Change the color theme conditionally here
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          // fontFamily: '"Plus Jakarta Sans", Arial, sans-serif',
        },
        components: {
          // Name of the component
          MuiCardContent: {
            root: {
              "&:last-child": {
                paddingBottom: 0,
              },
            },
          },
          MuiButtonBase: {
            defaultProps: {
              // The props to change the default for.
              disableRipple: true, // No more ripple!
            },
          },

          mode,
          ...(mode === "light"
            ? {
                MuiCard: {
                  styleOverrides: {
                    // Name of the slot
                    root: {
                      background: "rgba(33, 150, 243, 0.65)",
                      // background: "rgba(41, 121, 255, 0.6)",

                      borderRadius: "1.2rem",
                    },
                  },
                },
              }
            : {
                MuiCard: {
                  styleOverrides: {
                    // Name of the slot
                    root: {
                      // Some CSS
                      background: "rgba(66,66,66,0.6)",
                      borderRadius: "1.2rem",
                    },
                  },
                },
                MuiTooltip: {
                  styleOverrides: {
                    tooltip: {
                      backgroundColor: grey[50],
                      color: grey[800],
                    },
                  },
                },
              }),
        },
        shape: {
          borderRadius: 0,
        },
        palette: {
          mode,

          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: grey[200],
                },
                // divider: deepPurple[200],
                divider: "transparent",
                text: {
                  primary: blue[50],
                  secondary: blue[100],
                },
              }
            : {
                // palette values for dark mode
                // common: {
                //   black: "#f9f9f9",
                //   white: "#ffcc00"
                // },
                primary: {
                  main: deepPurple[300],
                },
                // divider: deepPurple[700],
                divider: "transparent",
                background: {
                  default: "#1e1e1e",
                  paper: "#1e1e1e",
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = () => React.useContext(ColorModeContext);

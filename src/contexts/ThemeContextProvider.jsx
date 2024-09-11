import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import { grey, blue } from "@mui/material/colors";

import { CssBaseline } from "@mui/material";
import { useAppContext } from "../hooks/useAppContext";

const commonStyles = {
  typography: {
    // fontFamily: '"Plus Jakarta Sans", Arial, sans-serif',
  },
};
// Define your themes for different times of the day
const themes = {
  // ============== morning ==============
  morning: createTheme({
    palette: {
      mode: "light",
      // ... other theme properties for morning
      ...commonStyles,
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
      },
    },
  }),

  // ============== afternoon ==============
  afternoon: createTheme({
    palette: {
      mode: "light",
      text: {
        primary: blue[50],
        secondary: blue[100],
      },
    },
    typography: {
      // fontFamily: '"Plus Jakarta Sans", Arial, sans-serif',
    },
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true, // No more ripple!
        },
      },
      MuiCardContent: {
        root: {
          "&:last-child": {
            paddingBottom: 0,
            marginBottom: 0,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          // Name of the slot
          root: {
            background: "rgba(33, 150, 243, 0.65)",
            // background: "rgba(0, 0, 0, 0.65)",

            borderRadius: "1.2rem",
          },
        },
      },
    },
  }),
  // ============== evening ==============
  evening: createTheme({
    palette: {
      mode: "dark",
      // ... other theme properties for evening
    },
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true, // No more ripple!
        },
      },
      MuiCardContent: {
        root: {
          "&:last-child": {
            paddingBottom: 0,
            marginBottom: 0,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          // Name of the slot
          root: {
            background: "rgba(0, 0, 0, 0.65)",
            borderRadius: "1.2rem",
          },
        },
      },
    },
  }),
  // ============== night ==============
  night: createTheme({
    palette: {
      mode: "dark",
      // ... other theme properties for night
    },
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true, // No more ripple!
        },
      },
      MuiCardContent: {
        root: {
          "&:last-child": {
            paddingBottom: 0,
            marginBottom: 0,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          // Name of the slot
          root: {
            background: "rgba(0, 0, 0, 0.65)",
            // background: "rgba(33, 33, 33, 0.65)",
            borderRadius: "1.2rem",
            // border: 0,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          // Name of the slot
          root: {
            background: "rgba(0, 0, 0, 0.65)",
            // background: "rgba(33, 33, 33, 0.65)",
            // borderRadius: "1.2rem",
            // border: 0,
            border: "1px solid rgba(255, 255, 255, 0.12)",
          },
        },
      },
    },
  }),
};

// Create a context for the theme
const ThemeContext = createContext(themes.morning);

// Create a provider component
export const ThemeContextProvider = ({ children }) => {
  const { timesOfDay } = useAppContext();
  const [currentTheme, setCurrentTheme] = useState(themes.morning);

  useEffect(() => {
    if (timesOfDay === "morning") {
      setCurrentTheme(themes.morning);
      // console.log("morning");
    } else if (timesOfDay === "afternoon") {
      setCurrentTheme(themes.afternoon);
      // console.log("afternoon");
    } else if (timesOfDay === "evening") {
      setCurrentTheme(themes.evening);
      // console.log("evening");
    } else {
      setCurrentTheme(themes.night);
      // console.log("night");
    }
  });

  return (
    <MUIThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

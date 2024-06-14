import React, { useContext } from "react";

import AppContext from "../contexts/AppContext/AppContext";

// custom hook using HOF - Now no need of using useContext hook in all components. we created our own Higer Order Function that take care of useContext Hook
export const useAppContext = () => useContext(AppContext);

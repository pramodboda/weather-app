import { createContext, useContext } from "react";

const AppContext = createContext();

export default AppContext;

// // custom hook using HOF - Now no need of using useContext hook in all components. we created our own Higer Order Function that take care of useContext Hook
// export const useAppContext = () => useContext(AppContext);

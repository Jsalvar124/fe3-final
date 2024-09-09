import { createContext, useState, useContext, useMemo } from "react";

// export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

const ContextProvider = ({children}) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState({theme: "Light"})
  // const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ContextGlobal.Provider value={{theme, setTheme}}>
      {children}
    </ContextGlobal.Provider>
  )
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal) 

import { createContext, useState, useContext } from "react";

// export const initialState = {theme: "", data: []}

// Reducer


export const ContextGlobal = createContext();

const ContextProvider = ({children}) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const getThemeFromLocalStorage = () => {
    const defaultTheme = {theme: "Light"}
    const savedTheme = localStorage.getItem("theme");
    if(!savedTheme){
      // there is no local storage item called theme: create it.with the default theme.
      localStorage.setItem("theme",JSON.stringify(defaultTheme))
    }
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  };
  const [theme, setTheme] = useState(getThemeFromLocalStorage)
  // const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ContextGlobal.Provider value={{theme, setTheme}}>
      {children}
    </ContextGlobal.Provider>
  )
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal) 

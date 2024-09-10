import { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios'

export const ContextGlobal = createContext();
  // Reducer

  //Local storage Favorites
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const lsTheme = JSON.parse(localStorage.getItem("theme")) || "Light";


const ContextProvider = ({children}) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(lsTheme);
  const [favs, setFavs] = useState(lsFavs);
  const [dentistas, setDentistas] = useState([])
  const API_URL = 'https://jsonplaceholder.typicode.com/users'
  
  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setDentistas(response.data)
    } catch (error) {
      console.error('Error fetching data:', error); // Handle errors
    }
  };

  useEffect(()=>{
    fetchData()
  }, [])

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ContextGlobal.Provider value={{theme, setTheme, favs, setFavs, dentistas, setDentistas}}>
      {children}
    </ContextGlobal.Provider>
  )
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal) 

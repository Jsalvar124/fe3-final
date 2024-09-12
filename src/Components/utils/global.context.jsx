import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import { reducer } from "../../Reducers/reducer";


export const ContextGlobal = createContext();

//Local storage Favorites
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const lsTheme = JSON.parse(localStorage.getItem("theme")) || "Light";
// Reducer
// initial state for reducer
const initialState = {
  dentistas: [],
  favs: lsFavs,
  theme: lsTheme
};

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // Lógica con useEffect
  // const [theme, setTheme] = useState(lsTheme);
  // const [favs, setFavs] = useState(lsFavs);
  // const [dentistas, setDentistas] = useState([])

  //Reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const API_URL = 'https://jsonplaceholder.typicode.com/users'

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      // setDentistas(response.data)
      // Dispatch action.
      dispatch({type: "GET_DENTISTS", payload: response.data})
    } catch (error) {
      console.error('Error fetching data:', error); // Handle errors
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(state.theme));
  }, [state.theme]);

  // const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  )
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal) 


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
const Navbar = () => {
  const { state, dispatch } = useContextGlobal(); 

  const handleToggleTheme = () =>{
    const newTheme = state.theme==="Light"?"Dark":"Light";
    // setTheme(newTheme)
    dispatch({type: "TOGGLE_THEME", payload: newTheme})
  }

  return (
    <nav className={`navbar ${state.theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleToggleTheme}>Change theme</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contacto</Link>
      <Link to={'/favs'}>Favoritos</Link>
    </nav>
  )
}

export default Navbar
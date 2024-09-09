
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
const Navbar = () => {
  const { theme, setTheme } = useContextGlobal(); 

  const handleToggleTheme = () =>{
    console.log("Clicked!")
    console.log(theme)
    if(theme.theme ==="Light")
      setTheme({theme: "Dark"})
    else
      setTheme({theme: "Light"}) 
  }

  return (
    <nav>
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
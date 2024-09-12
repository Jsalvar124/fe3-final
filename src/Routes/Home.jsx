import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  // traer del contexto luego
  const {state} = useContextGlobal();
  return (
    <main className={`home ${state.theme === 'Dark' ? 'dark' : 'light'}`} >
      <h1>Welcome!</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {
          state.dentistas.map(dentista=>{
            return(
                <Card key={dentista.id} dentista={dentista}/>
            )
          })
        }
      </div>
    </main>
  )
}

export default Home
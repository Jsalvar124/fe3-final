import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  // get favorites from localStorage. 
  const {state} = useContextGlobal();

  return (
    <main className={`favs ${state.theme === 'Dark' ? 'dark' : 'light'}`}>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">
        {state.favs.map(dentista=>{
            return(
                <Card key={dentista.id} dentista={dentista}/>
            )
          })}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs?.length===0 && <h2>You have no favorites!</h2>}
      </div>
    </main>
  );
};

export default Favs;

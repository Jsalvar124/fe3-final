import { useEffect, useState } from 'react';
import Card from '../Components/Card'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  // traer del contexto luego
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

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {
          dentistas.map(dentista=>{
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
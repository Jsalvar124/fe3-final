import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {state} = useContextGlobal();
  const [dentista, setDentista] = useState({})
  const params = useParams();
  // console.log(params.id)
  const DETAIL_URL = `https://jsonplaceholder.typicode.com/users/${params.id}`
  // console.log(DETAIL_URL)
  const fetchData = async () => {
    try {
      const response = await axios.get(DETAIL_URL)
      // console.log(response.data)
      setDentista(response.data)
    } catch (error) {
      console.error('Error fetching data:', error); // Handle errors
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <main className={`detail ${state.theme === 'Dark' ? 'dark' : 'light'}`}>
      <h1>Detail Dentist {dentista.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico  */}
      {
        dentista &&
        <div>
          <h3>Name: {dentista.name}</h3>
          <h3>Email: {dentista.email}</h3>
          <h3>Phone: {dentista.phone}</h3>
          <h3>Website: {dentista.website}</h3>
        </div>
      }

      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </main>
  )
}

export default Detail
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useContextGlobal();
  return (
    <main className={`contact ${state.theme === 'Dark' ? 'dark' : 'light'}`}>
    <div className="formBody">
      <h1>Want to know more?</h1>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
    </main>
  )
}

export default Contact
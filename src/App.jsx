
// Añadir Dependencias de React Router
// envolver las rutas en Componente Routes. 
import { Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail"


function App() {
  return (
    <div className="App" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="favs" element={<Favs />} />
        <Route path="/dentista/:id" element={<Detail />} />
        <Route path="*" element={<h1>404: Page not Found! 💢</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

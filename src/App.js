import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido/a a nuestra tienda online!" />} />
                <Route path="/productos" element={<ItemListContainer mensaje="Acá están nuestros productos" />} />
                <Route path="/contacto" element={<h2>Contacto</h2>} />
            </Routes>
        </Router>
    );
}

export default App;
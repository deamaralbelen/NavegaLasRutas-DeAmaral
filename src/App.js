import './styles/App.css'; 
import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Solo importo Routes y Route
import { CartProvider } from './contexts/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home'; // Importo Home

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/catalogo" element={<ItemListContainer mensaje="Acá están nuestros productos" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer mensaje="Productos filtrados por categoría" />} />
        <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<h2>Contacto</h2>} />
      </Routes>
    </CartProvider>
  );
}

export default App;

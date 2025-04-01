import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Importa las imágenes desde assets:
import sambaPink from '../assets/sambaPink.jpg';
import campusBrown from '../assets/campusBrown.jpg';
import campusBlack from '../assets/campusBlack.jpg';
import nikeGrey from '../assets/nikeGrey.jpg';
import vansKnu from '../assets/vansKnu.jpg';

const ItemListContainer = ({ mensaje }) => {
  const { categoriaId } = useParams();

  // Estado para los productos y el estado de carga
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Array de productos con imágenes importadas correctamente:
  const allProducts = [
    { id: 1, name: 'Adidas Samba Pink', price: 1650, category: 'Adidas', image: sambaPink },
    { id: 2, name: 'Adidas Campus Brown', price: 1300, category: 'Adidas', image: campusBrown },
    { id: 3, name: 'Adidas Campus Black', price: 1300, category: 'Adidas', image: campusBlack },
    { id: 4, name: 'Nike Dunk SB Grey', price: 1450, category: 'Nike', image: nikeGrey },
    { id: 5, name: 'Vans KNU Skull Negro', price: 1600, category: 'Vans', image: vansKnu },
  ];

  // Simula la llamada asíncrona para obtener los productos
  useEffect(() => {
    // Simula un retardo de 2 segundos para obtener los datos
    setTimeout(() => {
      setProductos(allProducts); // Guarda los productos en el estado
      setLoading(false); // Cambia el estado de carga a false
    }, 2000); // Retardo de 2 segundos
  }, []); // El array vacío asegura que se ejecute solo una vez cuando el componente se monte

  // Filtrar productos según el categoriaId en la URL
  const filteredProducts = categoriaId
    ? productos.filter(product => product.category.toLowerCase() === categoriaId.toLowerCase())
    : productos;

  // Si está cargando, muestra un mensaje de carga
  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>{mensaje}</h2>
      {categoriaId ? (
        <p>Filtrando productos por categoría: {categoriaId}</p>
      ) : (
        <p>Mostrando todos los productos</p>
      )}

      {/* Contenedor de productos */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} width="500px" />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <Link to={`/producto/${product.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
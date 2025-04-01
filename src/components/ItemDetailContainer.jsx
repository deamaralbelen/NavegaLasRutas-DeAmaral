import React, { useState, useEffect, useMemo } from 'react'; // Asegúrate de importar useMemo
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Importamos el hook useCart

// Importamos las imágenes desde assets:
import sambaPink from '../assets/sambaPink.jpg';
import campusBrown from '../assets/campusBrown.jpg';
import campusBlack from '../assets/campusBlack.jpg';
import nikeGrey from '../assets/nikeGrey.jpg';
import vansKnu from '../assets/vansKnu.jpg';

const ItemDetailContainer = () => {
  const { productoId } = useParams(); // Obtener el id del producto desde la URL
  const { addToCart } = useCart(); // Desestructuramos addToCart del contexto del carrito

  // Array de productos simulados con useMemo para evitar que cambie en cada renderizado
  const allProducts = useMemo(() => [
    { id: 1, name: 'Adidas Samba Pink', price: 1650, image: sambaPink, description: 'Zapatillas Adidas Samba en color rosado.' },
    { id: 2, name: 'Adidas Campus Brown', price: 1300, image: campusBrown, description: 'Zapatillas Adidas Campus en color marrón.' },
    { id: 3, name: 'Adidas Campus Black', price: 1300, image: campusBlack, description: 'Zapatillas Adidas Campus en color negro.' },
    { id: 4, name: 'Nike Dunk SB Grey', price: 1450, image: nikeGrey, description: 'Zapatillas Nike Dunk SB en color gris.' },
    { id: 5, name: 'Vans KNU Skull Negro', price: 1600, image: vansKnu, description: 'Zapatillas Vans KNU Skull en color negro.' },
  ], []); // El array solo se calcula una vez

  // Estado para el producto y la carga:
  const [product, setProduct] = useState(null); // Estado para el producto
  const [loading, setLoading] = useState(true); // Estado de carga

  // Estado para manejar la cantidad:
  const [quantity, setQuantity] = useState(1);

  // Simulamos la llamada asíncrona para obtener el producto
  useEffect(() => {
    setLoading(true); // Establecemos el estado de carga a true al inicio

    setTimeout(() => {
      const selectedProduct = allProducts.find(p => p.id === parseInt(productoId)); // Buscar el producto
      setProduct(selectedProduct); // Asignamos el producto al estado
      setLoading(false); // Establecemos el estado de carga a false
    }, 2000); // Retardo de 2 segundos
  }, [productoId, allProducts]); // Si allProducts no cambia, no afecta el efecto

  // Si estamos cargando, mostramos el mensaje de carga
  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  // Si no se encuentra el producto, mostramos un mensaje
  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  // Funciones para aumentar y disminuir la cantidad:
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  // Función para manejar la adición al carrito:
  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity }; // Producto con la cantidad seleccionada
    addToCart(productWithQuantity); // Agregar al carrito
  };

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <img src={product.image} alt={product.name} width="300px" /> {/* Imagen del producto */}
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Descripción: {product.description}</p>

      {/* Botones para seleccionar cantidad */}
      <div>
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      {/* Botón de agregar al carrito */}
      <button onClick={handleAddToCart}>Agregar al carrito</button>

      <br />
      <Link to="/catalogo">Volver al catálogo</Link> {/* Enlace para volver al catálogo */}
    </div>
  );
};

export default ItemDetailContainer;
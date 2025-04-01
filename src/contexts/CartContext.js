import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveCartToLocalStorage, loadCartFromLocalStorage } from '../utils/localStorage'; // Importamos las funciones del localStorage

// Crear el contexto del carrito:
const CartContext = createContext();

// Proveedor del contexto del carrito:
export const CartProvider = ({ children }) => {

  // Estado para almacenar los productos en el carrito y cargar desde localStorage:
  const [cart, setCart] = useState(() => loadCartFromLocalStorage()); // Usamos loadCartFromLocalStorage para inicializar el carrito

  // Cada vez que el carrito cambie, lo guardamos en localStorage:
  useEffect(() => {
    saveCartToLocalStorage(cart); // Guardamos el carrito cada vez que cambia
  }, [cart]);

  // Función para agregar un producto al carrito:
  const addToCart = (productWithQuantity) => {
    // Verificar si el producto ya está en el carrito:
    const existingProduct = cart.find(item => item.id === productWithQuantity.id);
    if (existingProduct) {
      // Si el producto ya está en el carrito, aumentamos la cantidad:
      setCart(cart.map(item =>
        item.id === productWithQuantity.id
          ? { ...item, quantity: item.quantity + productWithQuantity.quantity }
          : item
      ));
    } else {
      // Si no está, lo agregamos al carrito con la cantidad inicial:
      setCart([...cart, productWithQuantity]);
    }
  };

  // Función para eliminar un producto del carrito:
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Función para vaciar el carrito:
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del carrito:
export const useCart = () => useContext(CartContext);

// Exportar el contexto para su uso en otros componentes:
export default CartContext;
// src/utils/localStorage.js

export const saveCartToLocalStorage = (cart) => {

    // Guardar el carrito en el localStorage:

    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const loadCartFromLocalStorage = () => {

    // Cargar el carrito desde el localStorage, si existe:

    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  };
  
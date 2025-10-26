import React, { createContext, useState, useEffect, useContext } from 'react';

//Crear el Contexto
const CartContext = createContext();


export const useCart = () => {
    return useContext(CartContext);
};

//Creamos el provider
export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        try {
            const carritoGuardado = localStorage.getItem('carrito');
            return carritoGuardado ? JSON.parse(carritoGuardado) : [];
        } catch (error) {
            console.error("Error al leer el carrito de localStorage", error);
            return [];
        }
    });

    //Se guardará el LocalStorage cada vez que el carrito cambie
    useEffect(() => {
        try {
            localStorage.setItem('carrito', JSON.stringify(carrito));
        } catch (error) {
            console.error("Error al guardar el carrito en localStorage", error);
        }
    }, [carrito]);
  
    //Funciones
    const agregarAlCarrito = (producto) => {
        // Comprobar si el producto ya está en el carrito
        if (carrito.find(item => item.id === producto.id)) {
            alert('Este producto ya está en tu carrito.');
            return;
        }
        setCarrito(carritoActual => [...carritoActual, producto]);
        alert(`${producto.name} se ha añadido al carrito.`);
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(carritoActual => carritoActual.filter(item => item.id !== id));
    };

    const totalItems = carrito.length;

    const totalPrecio = carrito.reduce((total, item) => {
        const precio = Number(item.price) || 0;
        return total + precio;
    }, 0);


    const value = {
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        totalItems,
        totalPrecio
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
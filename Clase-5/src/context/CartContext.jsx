import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export function useCart(){
    return useContext(CartContext)
}


export const CartProvider = ({children}) => {

    const [carrito, setCarrito ] = useState([])

    const addToCart = (producto) => {
        console.log('Llamando al carrito');
        // setCarrito(producto);
        setCarrito((carritoActual) => [...carritoActual, producto])
    }

    // const removeFroMCart = (producto) => {
    //     console.log('Llamando al carrito');
    //     setCarrito((carritoActual) => [...carritoActual, producto])
    // }

  return (
    <CartContext.Provider value={{carrito, addToCart}}>
        { children }
    </CartContext.Provider>
  )
}

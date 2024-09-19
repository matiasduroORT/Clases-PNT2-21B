import React, { useEffect } from 'react'
import { useCart } from '../context/CartContext'

export const Carrito = () => {

    const { carrito } = useCart()

    useEffect(() => {
        console.log('Update el carrito');
    }, [carrito])
    


  return (
    <div>
        <h2>Carrito</h2>
        {
            carrito.map(( producto) => (
                <div key={producto.id}>
                    <span>{producto.nombre} - ${producto.precio}</span>
                </div>
            ))
        }
    </div>
  )
}

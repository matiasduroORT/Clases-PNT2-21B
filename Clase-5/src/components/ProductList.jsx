import { useEffect, useState } from 'react'
import { Producto } from './Producto'

export const ProductList = () => {

    const [productos, setProductos] = useState([])


    const nuevoListado = [
        {id: 1, nombre: 'Producto 1', precio: 500},
        {id: 2, nombre: 'Producto 2', precio: 1500}
    ]

    useEffect(() => {
        console.log('Ejecutado');
        setProductos(nuevoListado)
    }, [])
    




  return (
    <div>
        {
            productos.map( producto => (
                <Producto key={producto.id} producto={producto}/>
            ))
        }
    </div>
  )
}

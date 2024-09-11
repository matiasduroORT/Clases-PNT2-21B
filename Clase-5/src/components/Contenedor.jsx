import React from 'react'
import { ProductList } from './ProductList'
import { Usuario } from './Usuario'
import { Carrito } from './Carrito'

export const Contenedor = () => {
  return (
    <div className='main-container'>
        <div className='seccion'>
        <ProductList />
        </div>
        <div className='seccion'>
        <Carrito/>
        </div>   
        <div className='seccion'>
        <Usuario />
        </div>
    </div>
  )
}

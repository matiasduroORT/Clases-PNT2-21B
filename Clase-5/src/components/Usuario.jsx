import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'


const fetchUsuarios = async (setUser, setLoading) => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    setUser(data.results[0])
    setLoading(false)
}

export const Usuario = () => {

    const [user, setUser] = useState(null)
    const [loading, setLoading ] = useState(false)

    const { carrito } = useCart();

    useEffect(() => {
        setLoading(true)
        fetchUsuarios(setUser, setLoading)
    }, [carrito])


    // useEffect(() => {
    //     const nuevoContador = contador + 1
    //     setContador( nuevoContador)
    // }, [user])
    


  return (
    <>
    {
        loading ?
    (
    <div>
        <h1>Cargando</h1>
    </div>
    )
   :
   (
    <div>
        
        {
            user ? (
        <div>
            <h3>Usuarios Cargados:</h3>

            <p>Nombre: {user.name.first} {user.name.last}</p>
            <p>Email: {user.email} </p>
            <img src={user.picture.medium} alt="User" />
        </div>
            ) :
            ( <h2>Sin Usuarios</h2>)
        }
    </div>
   )
    }
    </>
  )
}

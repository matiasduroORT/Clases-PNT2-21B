import React, { useState } from 'react'
import { Titulo } from '../Principal/Alumno/Titulo'

export const Contador = () => {

// Inicialicen el estado del contador

const [contador, setContador] = useState(0)

// Funcion de Incrementar en 1
const Incrementar = () => {
    setContador( contador + 1 )
}



// Funcion de Decrementar en 1, debe parar si el valor es 0

const Reducir = () => {
    if(contador > 0){
        setContador(contador -1)
    }
}

// Return debe devolver

// 2 Botones, uno que diga Incrementar Los Alumnos en +1 y otro que diga
// Reducir los alumnos en -1
// Devolver el componente Titulo, que diga Contador: mediante prop




  return (
    <>
    {
      contador > 0 ? (
        <Titulo titulo={'Contador: ' + contador}/>
      ): (
        <h1>Cargando...</h1>
      )
    }
    <button onClick={Incrementar}>Incrementar Los Alumnos en +1</button>
    <button onClick={Reducir}>Reducir Los Alumnos en -1</button>
    </>

  )
}

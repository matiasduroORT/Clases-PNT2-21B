import React from 'react'

export const Listado = ({tareas, borrarTarea}) => {


  return (
    <ul>
    {
        tareas.map((tarea, index) => (
            <li key={index}>
                {tarea}
                <button onClick={() => borrarTarea(index)}>Eliminar</button>
            </li>
        ))
    }
    </ul>
  )
}

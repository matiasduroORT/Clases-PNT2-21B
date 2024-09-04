import React, { useState } from 'react'

export const useTodoHook = () => {
  
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('')


    const handleOnChange = (evento) => {
        console.log('OnChange: ', evento.target.value);
        setNuevaTarea(evento.target.value)
    }

    const agregarTarea = () => {
        
        setTareas([...tareas, nuevaTarea])
        setNuevaTarea('')
    }

    const borrarTarea = (indice) => {
        const nuevasTareas = tareas.filter((_, index) => index !== indice)
        setTareas(nuevasTareas)
    }

    return {
        handleOnChange,
        borrarTarea,
        agregarTarea,
        nuevaTarea,
        tareas
    }

}

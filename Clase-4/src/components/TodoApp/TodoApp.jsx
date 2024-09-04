import React, { useState } from 'react'
import { Titulo } from '../Principal/Alumno/Titulo';
import { Listado } from './Listado';
import { Input } from './Input';
import { Button } from './Button';
import { useTodoHook } from './hooks/useTodoHook';

export const TodoApp = () => {

  const {
    nuevaTarea, 
    handleOnChange,
    agregarTarea, 
    borrarTarea, 
    tareas 
    } = useTodoHook()

  return (
    <>
        <Titulo titulo="Lista de Tareas"/>
        <Input 
            nuevaTarea={nuevaTarea} 
            handleOnChange={handleOnChange} 
            type={'text'}
            placeholder={"Ingresa nueva tarea"}
        />
        <Button agregarTarea={agregarTarea} title="Agregar Tarea"/>
        <Listado tareas={tareas} borrarTarea={borrarTarea}/>
    </>
  )
}

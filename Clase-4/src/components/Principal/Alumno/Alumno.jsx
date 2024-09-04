import React from 'react'

// export const Alumno = (Props) => {
export const Alumno = ({datosAlumno, edades, fichaAlumnos}) => {


    // const {datosAlumno, edades, fichaAlumnos} = Props;

    const {nombre, cargo, materia} = datosAlumno

  return (
    <>
    <h1>Nombre: {nombre}</h1>
    <h3>Cargo: {cargo}</h3>
    <h4>Materia: {materia}</h4>
    </>
  )
}

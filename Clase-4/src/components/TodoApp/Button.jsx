import React from 'react'

export const Button = ({agregarTarea, title}) => {
  return (
    <button onClick={agregarTarea}>{title}</button>
  )
}

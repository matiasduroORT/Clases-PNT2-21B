import React from 'react'

export const Input = ({nuevaTarea, handleOnChange, placeholder, type}) => {
  return (
    <input
    type={type}
    value={nuevaTarea}
    onChange={(e) => handleOnChange(e)}
    placeholder={placeholder}
    />
  )
}

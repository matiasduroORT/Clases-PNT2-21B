import React from 'react'

export const Ejemplo = () => {
  return (
    <>
    <Contexto  data={[]}>
    <Componente1 >
        <Componente2>
            <Componente3>
                data.push([1])
            </Componente3>
        </Componente2>
    </Componente1>
    <Componete4 data={data}>
        <Componente5>
            data.push([1])
        </Componente5>
    </Componete4>


    <Componete20 />
    </Contexto>
    </>
  )
}

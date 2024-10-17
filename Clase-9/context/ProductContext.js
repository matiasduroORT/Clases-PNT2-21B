import { createContext, useEffect, useState } from "react"


export const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [productos, setProductos] = useState([])

    const fetchProducts = async () => {
        try {
            const respuesta = await fetch('https://66fc865cc3a184a84d173c40.mockapi.io/api/v1/productos')
            const data = await respuesta.json()
            setProductos(data)
        } catch (error) {
            console.error('Error en el fetch: ', error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const addProduct = async (newProduct) => {

        try {
            const respuesta = await fetch('https://66fc865cc3a184a84d173c40.mockapi.io/api/v1/productos', {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(newProduct)
            })

            if(respuesta.ok){
                const productoCreado = await respuesta.json();
                setProductos(( prevProducts) => [...prevProducts, productoCreado])
            }else{
                alert('Error al agregar producto')
            }
        } catch (error) {
            console.error('Error en la carga del producto: ', error)
        }

    }


    return (
        <ProductContext.Provider value={{productos, fetchProducts, addProduct}}>
            { children }
        </ProductContext.Provider>
    )
}
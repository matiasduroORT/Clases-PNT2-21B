import { createContext, useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const { user, setUser, status } = useContext(AuthContext)

    const [productos, setProductos] = useState([])
    const [cartItems, setCartItems] = useState( user?.cart  || [])

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

    useEffect(() => {
        if(user){
            setCartItems(user.cart || [])
        } else{
            setCartItems([])
        }
    }, [user])




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


    const addToCart = async (producto) => {
        
        const updateCartItems = (prevItems) => {
            const existeProducto = prevItems.find((item ) => item.id === producto.id)
            if(existeProducto){
                return prevItems.map((item) => 
                item.id === producto.id ? { ...item, cantidad: item.cantidad + producto.cantidad}
                : item
            );
            } else{
                return [...prevItems, producto]
            }
        }


        setCartItems((prevItems) => {
            const newCartItems = updateCartItems(prevItems)

            if(user){
                actualizarCarritoUsuario(user.id, newCartItems)
            }
            return newCartItems
        })

    }

    const removeFromCart = async (productId) => {

        setCartItems(( prevItems) => {
            const newCartItems = prevItems.filter((item) => item.id !== productId)
            if(user){
                actualizarCarritoUsuario(user.id, newCartItems)
            }
            return newCartItems
        })
    }

    const actualizarCarritoUsuario = async (userId, newCart) => {
        try {
            const respuesta = await fetch(`https://66fc865cc3a184a84d173c40.mockapi.io/api/v1/usuarios/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({cart: newCart}),
            });

            if( respuesta.ok ){
                const updateUser = await respuesta.json()

                setUser(updateUser)
                await AsyncStorage.setItem('userData', JSON.stringify(updateUser))
            }else{
                console.error('Erro al actualizar el carrito del usuario')
            }
        } catch (error) {
            console.error('Error al actualizar el carrito del usuario: ', error)
        }
    }



    const totalCarrito = () => {

        // console.log('CartItems: ', cartItems);
        const itemsEnCart = cartItems.reduce((total, item) => total + item.cantidad, 0)

        return itemsEnCart
    }


    return (
        <ProductContext.Provider value={{productos, fetchProducts, addProduct, addToCart, totalCarrito, removeFromCart}}>
            { children }
        </ProductContext.Provider>
    )
}
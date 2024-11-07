import { Button, Image, StyleSheet, Text, View } from "react-native"
import { useRouter, use, useLocalSearchParams } from 'expo-router'
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";


const ProductDetail = () => {

    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [ producto, setProducto ] = useState(null);
    const [ cantidad, setCantidad] = useState(1)

    const { addToCart, removeFromCart} = useContext(ProductContext)

    console.log('AddToCart: ', addToCart);


    useEffect(() => {

        const fetchProduct = async () => {
            try {
                const respuesta = await fetch(`https://66fc865cc3a184a84d173c40.mockapi.io/api/v1/productos/${id}`)
                const data = await respuesta.json();
                setProducto(data);
                
            } catch (error) {
                console.error(`Error al obtener los detalles del producto: `, error)
            }
        }

        fetchProduct()
    }, [id])

    const handleSubirCarrito = () => {
        if(producto){
            addToCart({...producto, cantidad})
            router.back();
        }
    }

    const handleBajarCarrito = () => {
        if(producto){
            removeFromCart(producto.id)
            router.back();
        }
    }


    if(!producto){
        return <Text>Cargando...</Text>
    }

    return (
        <View style={styles.container}>
            <Image 
                style={ styles.image}
                resizeMode="contain"
                source={{ uri: producto.image}}
            />
            <Text style={styles.title}>{producto.title}</Text>
            <Text style={styles.description}>{producto.description}</Text>
            <Text style={styles.price}>{producto.price}</Text>
            <Text style={styles.category}>{producto.category}</Text>
            <View style={styles.counterContainer}>
                <Button title="-" onPress={ () => setCantidad(Math.max(1, cantidad - 1))}/>
                <Text style={styles.cantidad}>{cantidad}</Text>
                <Button title="+" onPress={ () => setCantidad(cantidad + 1)}/>
            </View>
            <Button title="Agregar al carrito" onPress={ handleSubirCarrito }/>
            <Button title="Remover del carrito" onPress={ handleBajarCarrito }/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    image:{
        width: '100%',
        height: 200,
        marginBottom: 10
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        marginBottom: 20
    },
    category: {
        fontSize: 12,
        marginBottom: 20
    },
    price:{
        fontSize: 18,
        color: 'green',
        marginBottom: 20
    },
    counterContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    cantidad: {
        fontSize: 18,
        marginBottom: 20
    }

})

export default ProductDetail
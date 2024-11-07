import { useContext, useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProductContext } from "../../context/ProductContext";
import { ProductCard } from "../../components/products/ProductCard";
import { useRouter } from 'expo-router';
import { AuthContext } from "../../context/AuthContext";

export default function TabProduct(){


    const { productos, totalCarrito } = useContext(ProductContext)

    const { user } = useContext(AuthContext)


    const router  = useRouter();

    useEffect(() => {
        // console.log('User: ', user);

    }, [user, totalCarrito])
    



    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={ styles.touchable}
            key={item.id}
            onPress={() => router.push(`/product/${item.id}`)}
        >
        <ProductCard
            title={item.title}
            price={item.price}
            image={item.image}
        />
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.carrito}> Items en carrito: {totalCarrito()}</Text>
            {
                user.cart.map((item )=> (
                    <Text key={item.id} style={styles.carrito}> Producto: {item.title}</Text>
                ))
            }
            
            <Text style={styles.carrito}> Usuario: {user?.usuario}</Text>

            <FlatList
                data={productos}
                renderItem={ renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
            />
            {
            user?.admin && (
                <Button
                    title="Agregar Producto"
                    style={styles.button}
                    onPress={() => router.push('/addproduct')}
                />
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginBottom: 40,
        justifyContent: 'center'
    },
    button:{
        
    },
    flatListContainer: {
        justifyContent: 'center'
    },
    touchable:{
        flex: 1,
        margin: 10,
        maxWidth: '45%'
    },
    carrito: {
        fontSize: 24, 
        marginVertical: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
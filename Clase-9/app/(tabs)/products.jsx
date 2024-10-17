import { useContext } from "react";
import { Button, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { ProductContext } from "../../context/ProductContext";
import { ProductCard } from "../../components/products/ProductCard";
import { useRouter } from 'expo-router';

export default function TabProduct(){


    const { productos } = useContext(ProductContext)

    const router  = useRouter();


    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={ styles.touchable}
            key={item.id}
            onPress={() => console.log('Touch')}
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
            <FlatList
                data={productos}
                renderItem={ renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
            />
            <Button
                title="Agregar Producto"
                style={styles.button}
                onPress={() => router.push('/addproduct')}
            />
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
    }
})
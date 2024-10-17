import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const ProductCard = ({title, price, image, }) => {
  return (
    <View style={styles.card}>
        <Image 
            style={styles.image}
            resizeMode='contain'
            source={{uri: image}}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200,
        marginBottom: 10
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    price:{
        fontSize: 16,
        color: 'green',
        marginBottom: 5
    },
    card:{
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        width: '80%',
        height: 300
    }
})
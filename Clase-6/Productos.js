import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export const Productos = () => {

  const [productos, setProductos ] = useState([])

  const nuevosProductos = [
    { id: 1, nombre: 'Producto 1', precio: 500},
    { id: 2, nombre: 'Producto 2', precio: 750},
    { id: 3, nombre: 'Producto 3', precio: 1000},
    { id: 4, nombre: 'Producto 4', precio: 1250},
    { id: 5, nombre: 'Producto 5', precio: 1500},
    { id: 6, nombre: 'Producto 6', precio: 1750},
  ]

  useEffect(() => {
    setProductos(nuevosProductos)
  }, [])
  

  return (
    <View style={ styles.container}>
    <ScrollView style={styles.scrollContainer}>
    {
      productos.map( (producto) => (
        <View key={producto.id} style={styles.productContainer}>
          <Text style={styles.nombre}>{producto.nombre}</Text>
          <Text style={styles.precio}>{producto.precio}</Text>
          <Button title="Agregar al Carrito"/>
        </View>
      ))
    }
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20
    },
    scrollContainer:{
      paddingHorizontal: 20,
      paddingBottom: 20
    },
    productContainer:{
      marginBottom: 20,
      padding: 15,
      backgroundColor: '#f2f2f2'
    },
    nombre: {
      fontSize: 22,
      fontWeight: 'bold',
      color:'#333'
    },
    precio:{
      fontSize: 18,
      marginVertical: 5,
      color:'#666'
    }
  });
  

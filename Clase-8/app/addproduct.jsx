import { useContext, useState } from "react"
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { ProductContext } from "../context/ProductContext";
import { useRouter } from 'expo-router';


export default function addProductScreen() {

    const { addProduct } = useContext(ProductContext)
    
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')

    const subirImagenGaleria = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

          console.log('Subir Imagen: ', result);

          if(!result.canceled){
            setImage(result.assets[0].uri)
          }
    }

    const subirImagenCamara = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

          console.log('Subir Imagen: ', result);

          if(!result.canceled){
            setImage(result.assets[0].uri)
          }
    }

    const cargarProducto = () => {
        const newProduct = {
            id: Math.random.toString(),
            title: title,
            price: parseFloat(price),
            description,
            category,
            image
        }

        console.log('El nuevo producto es: ', newProduct);
        addProduct(newProduct)
        router.push('/(tabs)/products')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agregar Nuevo Producto</Text>
            <TextInput
                style={styles.input}
                placeholder="Titulo"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
                value={price}
                onChangeText={setPrice}
            />
            <TextInput
                style={styles.input}
                placeholder="Descripcion"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Categoria"
                value={category}
                onChangeText={setCategory}
            />
            <View style={styles.uploadContainer}>
            <Button title="Subir Imagen Galeria" style={styles.button} onPress={subirImagenGaleria}/>
            <Button title="Subir Imagen Camara" style={styles.button} onPress={subirImagenCamara}/>
            </View>
            {image && <Image source={{uri: image}} style={styles.image}/>}
            <Button title="Subir Producto"style={styles.button} onPress={cargarProducto}/>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    title:{
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
    input:{
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    button:{
        marginTop: 20
    },
    image:{
        width: '100%',
        height: 200,
        marginVertical: 20
    },
    uploadContainer:{
        flexDirection: 'row',
        gap: 10, 
        marginBottom: 30
    }
})
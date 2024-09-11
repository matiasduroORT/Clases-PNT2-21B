import './App.css'
import { Carrito } from './components/Carrito'
import { Contenedor } from './components/Contenedor'
import { ProductList } from './components/ProductList'
import { Usuario } from './components/Usuario'
import { CartProvider } from './context/CartContext'

function App() {


  /* 
  1- Crear boton de eliminar del carrito x producto
    Crear la funcion en el contexto, y el boton en Producto
  2- 
    Crear un nuevo componente, que tenga la suma total del carrito
    Tal suma debe estar en una funcion, claramente en el contexto
  */


  return (
    <>
    <CartProvider>
      <Contenedor />
    </CartProvider>
    </>
  )
}

export default App

import { createContext, useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {


  const [ status, setStatus] = useState('checking')
  const [ user, setUser ] = useState(null)

  useEffect(() => {

    const cargarEstadoAuth = async () => {
        const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
        const userData = await AsyncStorage.getItem('userData');

        if(isAuthenticated === 'true' && userData){
            setUser(JSON.parse(userData))
            setStatus('authenticated')
        }else{
            setStatus('unauthenticated')
        }

    }

    cargarEstadoAuth()
  }, [])

  const login = async (usuario, password) => {
    try {
      const response = await fetch('https://66fc865cc3a184a84d173c40.mockapi.io/api/v1/usuarios');
      const data = await response.json()
      
      const user = data.find( u => u.usuario === usuario && u.password === password );

      if(user){
        await AsyncStorage.setItem('isAuthenticated', 'true')
        await AsyncStorage.setItem('userData', JSON.stringify(user))
        setUser(user)
        setStatus('authenticated')
      }else{
        setStatus('unauthenticated')
      }
    } catch (error) {
      console.error(error)
      alert('Error en la autenticacion')
    }
  }

  const register = async () => {

    try {
      const response = await fetch('https://66fc865cc3a184a84d173c40.mockapi.io/api/v1/usuarios');
      const data = await response.json()
      
      const userExist = data.some( u => u.usuario === usuario);
      const emailExist = data.some( u => u.email === email);

      if(userExist){
        alert('Usuario ya registrado')
      }
      else if(emailExist){
        alert('Email ya registrado')
      }
      else{

        const body = JSON.stringify({
          usuario: usuario,
          email: email,
          password: password,
          avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
        })


        const response = await fetch('https://66fc865cc3a184a84d173c40.mockapi.io/api/v1/usuarios', {
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: body
        });

        if(response.ok){
          alert('Registro Exitoso')
        }else{
          alert('Error al registrar el usuario')
        }
      }
    } catch (error) {
      console.error(error)
      alert('Error en la autenticacion')
    }
  }



    return (
        <AuthContext.Provider value={{login, register, status, user, setUser}}>
            { children }
        </AuthContext.Provider>
    )
}
import { Image, StyleSheet, Platform, View, Text, TextInput, Button, Switch } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { AuthContext } from '../context/AuthContext';

export default function Login() {

  const { login, register, status } = useContext(AuthContext)

  const [esLogin, setEsLogin] = useState(false)
  const [usuario, setUsuario ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  const router = useRouter()

  const handleSubmit = () => {
    if(esLogin){
      console.log('intenta login');
      login(usuario, password)
    } else{
      register(usuario, email, password)
    }
  }

  useEffect(() => {

    if(status === 'authenticated'){
      router.push('/(tabs)/home')
    }

  }, [status])


  if(status === 'checking' || status === 'authenticated'){
    return <Text>Cargando...</Text>
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{esLogin ? 'Login' : 'Register'}</Text>
      <Text>Usuario:</Text>
      <TextInput 
        style={ styles.input} 
        placeholder='Ingrese su Usuario'
        value={usuario}
        onChangeText={setUsuario}
        />
      {
        !esLogin && (
          <>
          <Text>Email:</Text>
          <TextInput 
            style={ styles.input} 
            placeholder='Ingrese su Email'
            value={email}
            onChangeText={setEmail}
            />
          </>
        )
      }
      <Text>Password:</Text>
      <TextInput 
        secureTextEntry={true}  
        style={ styles.input} 
        placeholder='Ingrese su password'
        value={password}
        onChangeText={setPassword}
        />
      <View style={styles.register}>
          <Button title={'Iniciar Sesion'} onPress={handleSubmit} />

      </View>
      <View>
        <Text>{esLogin ? "Cambia a Registro" : 'Cambia a Login'}</Text>
        <Switch value={esLogin} onValueChange={setEsLogin}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input:{
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  title:{
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },  
  register:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  }
});

import { Image, StyleSheet, Platform, View, Text, TextInput, Button, Switch, Alert } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { AuthContext } from '../context/AuthContext';
import * as LocalAuthentication from 'expo-local-authentication';



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

  const handleAuth = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync()
    console.log('hasHardware: ', hasHardware);

    if(!hasHardware) {
      Alert.alert('Error', 'El dispositivo no tiene hardware necesario para la authenticacion biometrica')
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync()

    if(!isEnrolled){
      Alert.alert('Error', 'No hay datos biometricos registrados en el dispositivo')
    }

    console.log('isEnrolled: ', isEnrolled);

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Porfavor confirma tu identidad'
    })

    console.log('Auth: ', auth);

    if(auth.success){
      router.push('/(tabs)/home')
    }else{
      Alert.alert('Error', 'No se pudo verificar la identidad')
    }

  }

  useEffect(() => {

    if(status === 'authenticated'){
      handleAuth()
    }

  }, [status])


  if(status === 'checking'){
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

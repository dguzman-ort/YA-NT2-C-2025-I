import { View, Text, StyleSheet, Button, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { Input } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import authService from '../services/authService';
import { useAuth } from '../hooks/useAuth';

export default function RegistroLoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();



  const handleLogin = () => {
    console.log('email', email);
    console.log('password', password);
    authService.login(email, password).then((response) => {
      console.log('response', response);
      setAuth(response);
      //navigation.navigate('ListadoVehiculos');
    }).catch((error) => {
      console.log('error', error);
      alert(error);
    })
    
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior="padding"
      >
      <Text style={styles.title}>Login</Text>
      <Input
          placeholder="Email"
          style={styles.input}
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          //errorMessage={formError?.marca ? 'La marca es requerida' : ''}
        />
      <Input
          placeholder="Contraseña"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          //errorMessage={formError?.marca ? 'La marca es requerida' : ''}
        />
      <Button
        title="Iniciar sesión"
        onPress={handleLogin}
      />

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,    
  },
});
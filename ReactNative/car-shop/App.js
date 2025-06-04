import { SafeAreaView, StyleSheet, Button, Text } from 'react-native';
import { AuthProvider, useAuth } from './hooks/useAuth';
import ListadoVehiculos from './screens/ListadoVehiculos';
import VehiculoFormScreen from './screens/VehiculoFormScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import RegistroLoginScreen from './screens/RegistroLoginScreen';


const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const { auth } = useAuth();
  console.log('auth', auth);
  return (
    <Stack.Navigator>

      {auth ?
        <>
          <Stack.Screen
            name="ListadoVehiculos"
            component={ListadoVehiculos}
            options={{
              title: "Listado de Vehiculos",
              headerRight: () => (
                <Button title="Agregar" onPress={() => {
                  navigation.navigate("VehiculoFormScreen")
                }} />
              ),
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="VehiculoFormScreen"
            component={VehiculoFormScreen}
            options={{
              title: "Formulario de Vehiculo",
              headerBackTitle: "Volver",
              headerShown: false,
            }}
          />
        </>
        :
        <Stack.Screen
          name="RegistroLoginScreen"
          component={RegistroLoginScreen}
          options={{
            headerShown: false,
          }}
        />
      }


    </Stack.Navigator>
  )
}

export default function App() {


  return (

    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </AuthProvider>
      {/* <ListadoVehiculos /> */}
      {/* <VehiculoFormScreen /> */}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});


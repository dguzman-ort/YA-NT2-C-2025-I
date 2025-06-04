import { SafeAreaView, StyleSheet, Button, Text } from 'react-native';
import { VehiculosProvider } from './hooks/useVehiculos';
import ListadoVehiculos from './screens/ListadoVehiculos';
import VehiculoFormScreen from './screens/VehiculoFormScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    // <VehiculosProvider>
      <Stack.Navigator initialRouteName={"ListadoVehiculos"}>
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
      </Stack.Navigator>
    // </VehiculosProvider>


  )
}

export default function App() {


  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
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


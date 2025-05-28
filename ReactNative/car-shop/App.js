import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Vehiculo from './components/Vehiculo';
import { VehiculosProvider } from './hooks/useVehiculos';
import ListadoVehiculos from './screens/ListadoVehiculos';
import VehiculoFormScreen from './screens/VehiculoFormScreen';

// import Constants from 'expo-constants';

export default function App() {


  return (
      <VehiculosProvider>
          <SafeAreaView style={styles.container}>
            <ListadoVehiculos />
            {/* <VehiculoFormScreen /> */}
          </SafeAreaView>
      </VehiculosProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});


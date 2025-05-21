import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Vehiculo from './components/Vehiculo';
import { VehiculosProvider } from './hooks/useVehiculos';
import ListadoVehiculos from './screens/ListadoVehiculos';
export default function App() {


  return (
    <VehiculosProvider>
      <View style={styles.container}>
        <ListadoVehiculos />
        <StatusBar style="auto" />
      </View>
    </VehiculosProvider>
      





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

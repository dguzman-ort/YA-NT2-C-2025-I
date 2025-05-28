import { useVehiculos } from '../hooks/useVehiculos';
import Vehiculo from '../components/Vehiculo';
import { View, StyleSheet } from 'react-native';
import VehiculoScrollView from '../components/VehiculoScrollView';
import VehiculoFlatList from '../components/VehiculoFlatList';

export default function ListadoVehiculos() {
  const { vehiculos } = useVehiculos();
  return (
    <View>
      {/* <VehiculoScrollView vehiculos={vehiculos} /> */}
      <VehiculoFlatList vehiculos={vehiculos} />
    </View>
    
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
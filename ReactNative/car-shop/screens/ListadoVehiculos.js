import { useVehiculos } from '../hooks/useVehiculos';
import Vehiculo from '../components/Vehiculo';
import { View } from 'react-native';
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
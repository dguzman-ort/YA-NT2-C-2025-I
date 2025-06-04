import { useVehiculos } from '../hooks/useVehiculos';
import Vehiculo from '../components/Vehiculo';
import { View } from 'react-native';
import VehiculoScrollView from '../components/VehiculoScrollView';
import VehiculoFlatList from '../components/VehiculoFlatList';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { getVehiculos } from '../services/vehiculos';

export default function ListadoVehiculos() {
  // const { vehiculos } = useVehiculos();

  const [vehiculos, setVehiculos] = useState([]);

  useFocusEffect(useCallback(() => {
    getVehiculos().then((vehiculos) => {
      setVehiculos(vehiculos);
    })
  }, []));

  return (
    <View>
      {/* <VehiculoScrollView vehiculos={vehiculos} /> */}
      <VehiculoFlatList vehiculos={vehiculos} />
    </View>
    
  );
}
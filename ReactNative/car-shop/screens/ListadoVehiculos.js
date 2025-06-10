import { useVehiculos } from '../hooks/useVehiculos';
import Vehiculo from '../components/Vehiculo';
import { View, Text, Button } from 'react-native';
import VehiculoScrollView from '../components/VehiculoScrollView';
import VehiculoFlatList from '../components/VehiculoFlatList';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { getVehiculos } from '../services/vehiculos';
import { useAuth } from '../hooks/useAuth';

export default function ListadoVehiculos() {
  // const { vehiculos } = useVehiculos();
  const { auth, setAuth } = useAuth();
  const [vehiculos, setVehiculos] = useState([]);

  useFocusEffect(useCallback(() => {
    getVehiculos(auth.access_token).then((vehiculos) => {
      setVehiculos(vehiculos);
    })
  }, []));

  const handleLogout = () => {
    setAuth(null);
  }

  return (
    <View>
      {/* <VehiculoScrollView vehiculos={vehiculos} /> */}
      <View>
        <Button title="Cerrar sesión" onPress={handleLogout} /> 
      </View>
      <VehiculoFlatList vehiculos={vehiculos} />
    </View>
    
  );
}
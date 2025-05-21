import Vehiculo from '../Vehiculo';
import { FlatList, View } from 'react-native';

const renderItem = ({item}) => {
  return <Vehiculo vehiculo={item} />
}

export default function VehiculoFlatList({vehiculos}) {
  return (
    <FlatList
      data={vehiculos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
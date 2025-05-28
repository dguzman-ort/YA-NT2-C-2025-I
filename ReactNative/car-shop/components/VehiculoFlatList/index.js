import { TouchableOpacity } from 'react-native';
import Vehiculo from '../Vehiculo';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function VehiculoFlatList({vehiculos}) {

  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity 
        onPress={() => {
          console.log("vehiculo a buscar", item.id);
          navigation.navigate("VehiculoFormScreen", { id: item.id });
        }}
      >
        <Vehiculo vehiculo={item} />
      </TouchableOpacity>
    )
  }


  return (
    <FlatList
      data={vehiculos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
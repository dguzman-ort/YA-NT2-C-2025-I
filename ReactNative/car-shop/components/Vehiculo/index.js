import { Card } from '@rneui/themed';
import { Image, View, Text } from 'react-native';
// import { useEffect } from 'react';

export default function Vehiculo({vehiculo}) {
  
  // useEffect(() => {
  //   console.log("Vehiculo cargado", vehiculo.id);

  //   return () => {
  //     console.log("Vehiculo eliminado", vehiculo.id);
  //   }
  // }, []);


  return (
    <View>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title>{vehiculo.marca}, {vehiculo.modelo}</Card.Title>
        <Card.Divider />
        <View style={{ position: 'relative', alignItems: 'center' }}>
          <Image 
            source={{ uri: vehiculo.urlImagen }} 
            resizeMode='contain'
            style={{ width: '100%', height: 100 }}
          />
          <Text> Marca: {vehiculo.marca}</Text>
          <Text> Modelo: {vehiculo.modelo}</Text>
          <Text> Precio: {vehiculo.precio}</Text>
          <Text> Año: {vehiculo.anio}</Text>
        </View>
      </Card>
    </View>

  );
}
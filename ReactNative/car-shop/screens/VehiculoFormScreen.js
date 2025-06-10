import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Alert, KeyboardAvoidingView } from "react-native";
import { Input } from '@rneui/themed';
import { DEFAULT_URL_IMAGEN, saveVehiculo, updateVehiculo, getVehiculoById } from '../services/vehiculos';
import { useState, useEffect } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
// import { useAuth } from '../hooks/useAuth';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params || {};
  // const { auth } = useAuth();
  // console.log("auth", auth);

  //console.log("id", id);

  const [vehiculo, setVehiculo] = useState({
    marca: '',
    modelo: '',
    precio: '',
    anio: '',
    urlImagen: DEFAULT_URL_IMAGEN,
  });
  const [formError, setFormError] = useState(null);

  // useEffect(() => {
  //   console.log("Aqui valido la marca", vehiculo.marca);
  // }, [vehiculo.marca]);

  
  useEffect(() => {
    if (id){
      getVehiculoById(id).then((vehiculo) => {
        console.log("vehiculo encontrado", vehiculo);
        setVehiculo(vehiculo);
      }).catch((error) => {
        console.log("Error al obtener el vehiculo", error);
      });
    }
  }, [id])
  
  const handleInputChange = (name, value) => {
    setVehiculo({ ...vehiculo, [name]: value });
    setFormError({ ...formError, [name]: false });
  }

  const handleSubmit = () => {
    // console.log(vehiculo);

    //TODO: Hacer las validaciones correspondientes
    if (vehiculo.marca === '' || vehiculo.modelo === '' || vehiculo.precio === '' || vehiculo.anio === '') {
      setFormError({
        marca: vehiculo.marca === '',
        modelo: vehiculo.modelo === '',
        precio: vehiculo.precio === '',
        anio: vehiculo.anio === '',
      });
      return;
    }


    const esNuevoVehiculo = !id;
    if (esNuevoVehiculo){
      saveVehiculo(vehiculo).then((vehiculo) => {
        console.log("vehiculo guardado", vehiculo);
        navigation.goBack();
      }).catch((error) => {
        console.log("Error al guardar el vehiculo", error);
      });
    } else {
      updateVehiculo(vehiculo).then((vehiculo) => {
        console.log("vehiculo actualizado", vehiculo);
        // update del estado de vehiculos
        navigation.goBack();
      }).catch((error) => {
        console.log("Error al actualizar el vehiculo", error);
      });
    }
  }

  return (

    <View style={[styles.container, styles.form]}>
      <Text style={styles.titleContainer}>Formulario de Vehiculo</Text>      
      {/* <View><Text>Hola, {auth.user.fullName}</Text></View> */}
        <Input
          placeholder="Marca"
          style={styles.input}
          value={vehiculo.marca}
          onChangeText={(text) => handleInputChange('marca', text)}
          errorMessage={formError?.marca ? 'La marca es requerida' : ''}
        />
        <Input
          placeholder="Modelo"
          style={styles.input}
          value={vehiculo.modelo}
          onChangeText={(text) => handleInputChange('modelo', text)}
          errorMessage={formError?.modelo ? 'El modelo es requerido' : ''}
        />
        <Input
          placeholder="Precio"
          keyboardType={'decimal-pad'}
          style={styles.input}
          value={vehiculo.precio.toString()}
          onChangeText={(text) => handleInputChange('precio', text)}
          errorMessage={formError?.precio ? 'El precio es requerido' : ''}
        />
        <Input
          placeholder="Año"
          inputStyle={{ fontWeight: 'bold' }}
          value={vehiculo.anio.toString()}
          onChangeText={(text) => handleInputChange('anio', text)}
          errorMessage={formError?.anio ? 'El año es requerido' : ''}
        />        
        {/* <Input placeholder="URL de la imagen" style={styles.input} value={vehiculo.urlImagen} onChangeText={(text) => handleInputChange('urlImagen', text)} />   */}
        <View style={styles.buttonContainer}>
          <Button title="Cancelar" onPress={() => navigation.goBack()} /> 
          <Button title="Guardar" onPress={handleSubmit} />
        </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  form: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
  }

});
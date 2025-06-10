const MAX_VEHICULOS = 20;
const DEFAULT_URL_IMAGEN = 'https://img.freepik.com/vector-gratis/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg';

const URL_API = 'https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api';

const marcas = ['Toyota', 'Ford', 'Chevrolet'];

const modelos = {
    "Toyota": ['Corolla', 'Camry', 'Prius', 'Yaris', 'Rav4', 'Fortuner', 'Hilux', 'Land Cruiser', 'Prado', 'Fortuner'],
    "Ford": ['F-150', 'F-250', 'F-350', 'F-450', 'F-550', 'F-650', 'F-750', 'F-850', 'F-950', 'F-1050'],
    "Chevrolet": ['Silverado', 'Colorado', 'Blazer', 'Trax', 'Traverse', 'Equinox', 'Camaro', 'Corvette', 'Suburban', 'Tahoe'],
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generarMarca = () => {
    return marcas[random(0, marcas.length - 1)];
}

const generarModelo = (marca) => {
    return modelos[marca][random(0, modelos[marca].length - 1)];
}

const generarAnio = () => {
    return random(1990, 2024);
}

const generarVehiculo = () => {
    const marca = generarMarca();
    const modelo = generarModelo(marca);
    const precio = random(10000, 100000);
    const anio = generarAnio();
    const urlImagen = DEFAULT_URL_IMAGEN;

    return { marca, modelo, precio, anio, urlImagen };
}


const vehiculos = Array.from({ length: MAX_VEHICULOS }, generarVehiculo).map((vehiculo, index) => ({
  ...vehiculo,
  id: index
}))

const getVehiculos = (token) => {
  // Simular una llamada a una API
  return new Promise((resolve, reject) => {
    const response = fetch(`${URL_API}/read`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    response.then(response => {
      //console.log("response", response);
      return response.json();
    }).then(data => {
      //console.log("data", data);
      resolve(data);
    })
    .catch(error =>{
      console.log("error", error);
      reject(error);
    })   
  });


  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     //console.log("vehiculos", vehiculos);
  //     resolve(
  //       vehiculos
  //     );
  //   }, 1000);
  // });
}

const getVehiculoById = (id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/read/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => response.json())
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log("error al obtener vehiculo por id", error);
      reject(error);
    })
  });
}

const updateVehiculo = (vehiculo, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/update/${vehiculo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(vehiculo)
    })
    .then(response => {
      console.log("response", response);
      if(response.ok){
        resolve(true);
      }else{
        reject(new Error("Error al actualizar vehiculo"));
      }
    })
    .catch(error => {
      console.log("error al actualizar vehiculo", error);
      reject(error);
    })
  });
}

const saveVehiculo = (vehiculo, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(vehiculo)
    })
    .then(response => response.json())
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log("error al guardar vehiculo", error);
      reject(error);
    })
  })
}


export { 
  getVehiculos, 
  saveVehiculo, 
  DEFAULT_URL_IMAGEN,
  getVehiculoById,
  updateVehiculo
};


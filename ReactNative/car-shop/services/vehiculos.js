const MAX_VEHICULOS = 100000;

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
    const urlImagen = `https://img.freepik.com/vector-gratis/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg`;

    return { marca, modelo, precio, anio, urlImagen };
}



const getVehiculos = () => {
  // Simular una llamada a una API
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: MAX_VEHICULOS }, generarVehiculo).map((vehiculo, index) => ({
          ...vehiculo,
          id: index
        }))
      );
    }, 1000);
  });
}


export { getVehiculos };


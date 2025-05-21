import { createContext, useState, useContext, useEffect } from "react";
import { getVehiculos } from "../services/vehiculos";

export const VehiculosContext = createContext();

export function VehiculosProvider({ children }) {

  const [vehiculos, setVehiculos] = useState([]);
  
  useEffect(() => {
    getVehiculos().then((vehiculos) => {
      // console.log(vehiculos.length, vehiculos);
      setVehiculos(vehiculos);
    });
  }, []);

  return <VehiculosContext.Provider value={{ vehiculos }}>{children}</VehiculosContext.Provider>;
}

const useVehiculos = () => {
  const vehiculoContext = useContext(VehiculosContext);

  if (!vehiculoContext) {
    throw new Error('useVehiculos debe ser usado dentro de un VehiculosProvider');
  }

  return vehiculoContext;
  
}

export { useVehiculos };

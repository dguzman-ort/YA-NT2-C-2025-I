import { createContext, useState, useContext, useEffect, useCallback } from "react";
import AsyncStorage from "../services/AsyncStorage";
import authService from "../services/authService";

const authData = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    // Necesitamos que al levantar nuestra app, se verifique si hay un auth en el AsyncStorage

    AsyncStorage.getData(authService.AUTH_KEY).then((data) => {
      console.log("Encuentro dato en el AsyncStorage", data);
      if (data) {
        setAuth(data);
      }
    });
  }, []);

  useEffect(() => {
    console.log("Cambio el estado de auth", auth);
    if (auth) {
      // Cuando me logueo, guardo el auth en el AsyncStorage
      console.log("Procedo a modificar el AsyncStorage");
      AsyncStorage.storeData(authService.AUTH_KEY, auth);
    }else{
      // Cuando me deslogueo, limpio el AsyncStorage
      AsyncStorage.clearData();
    }
  }, [auth]);

  return <authData.Provider value={{ auth, setAuth }}>{children}</authData.Provider>;
}

export function useAuth() {
  const authContext = useContext(authData);

  if (!authContext) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }

  return authContext;
}
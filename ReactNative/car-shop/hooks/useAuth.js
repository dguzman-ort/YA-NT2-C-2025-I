import { createContext, useState, useContext, useEffect, useCallback } from "react";

const authData = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  return <authData.Provider value={{ auth, setAuth }}>{children}</authData.Provider>;
}

export function useAuth() {
  const authContext = useContext(authData);

  if (!authContext) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }

  return authContext;
}
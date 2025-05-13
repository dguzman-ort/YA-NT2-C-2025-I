import { useContext, useState, createContext } from 'react'

const IniciadoContext = createContext(false)

export function IniciadoProvider({ children }) {
  const [estaIniciado, setEstaIniciado] = useState(false)

  const toggleIniciado = () => setEstaIniciado((prev) => !prev)
  return(
    <IniciadoContext.Provider value={{ estaIniciado, toggleIniciado }}>
      { children }
    </IniciadoContext.Provider>
  )
}


export function useIniciado() {
    const estaIniciado = useContext(IniciadoContext)

    if (!estaIniciado) {
        throw new Error("useIniciado debe estar dentro de un IniciadoContext.Provider")
    }
    return estaIniciado
}
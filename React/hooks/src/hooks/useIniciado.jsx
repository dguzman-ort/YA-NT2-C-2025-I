import { useContext, useState, createContext } from 'react'

const IniciadoContext = createContext(false)

export function IniciadoProvider({ children }) {
  const [estaIniciado, setEstaIniciado] = useState(false)
  const [reiniciar, setReiniciar] = useState(false)

  const toggleIniciado = () => setEstaIniciado((prev) => !prev)
  const toggleReiniciar = () => {
    setReiniciar(true)
    setEstaIniciado(false)
    setTimeout(() => {
      setReiniciar(false)
    })
  }
  return(
    <IniciadoContext.Provider value={{ estaIniciado, toggleIniciado, reiniciar, toggleReiniciar }}>
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
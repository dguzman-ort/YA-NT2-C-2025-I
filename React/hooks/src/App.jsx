import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState("Desconocido")
  const [edad, setEdad] = useState(20)


  useEffect(() => {
    console.log("1.- Inicializacion del componente")
    return () => {
      console.log("3.- Estamos en el ciclo de vida UNMOUNT: apenas se remueve este componente me ejecuto!")
    }


  }, [])

  useEffect(() => {
    console.log("2.- Cambio el estado nombre: ", nombre)
  }, [nombre])

  useEffect(() => {
    console.log("2.- Cambio el estado edad: ", edad)
  }, [edad])

  useEffect(() => {
    console.log("2.- Cambio uno de los dos estados: ", nombre, edad)
  }, [nombre, edad])



  return (
    <>
      <div><h1>00:00</h1></div>
      <div className="card">
        <button>Iniciar | Pausar</button>
        <button>Reiniciar</button>
      </div>        
      
    </>
  )
}

export default App

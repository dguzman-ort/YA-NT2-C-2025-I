import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Saludo from './components/Saludo'

function App() {
  
  const [nombre, setNombre] = useState("Susana")
  let nombre2 = "Susana"
  const cambiarNombre = (nuevoNombre) => {
    console.log("nombre original", nombre)
    setNombre(nuevoNombre)
    console.log("nombre nuevo", nombre)
  }
  // const nombre = 'Susana'

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Saludo />      
      <Saludo nombre={nombre} elemento='h1'/>
      <Saludo nombre={nombre} elemento='h2'/>
      <button onClick={() => setNombre(prompt("Cual es tu nombre?"))}>Cambiar nombre</button>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

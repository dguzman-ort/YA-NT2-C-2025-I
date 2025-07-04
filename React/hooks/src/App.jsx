import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cronometro from './components/Cronometro'
import Control from './components/Control'
import { IniciadoProvider } from './hooks/useIniciado'

function App() {
  
  return (
    <IniciadoProvider>
      <Cronometro />
      <Control />
    </IniciadoProvider>
  )
}

export default App

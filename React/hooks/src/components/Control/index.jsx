import { useIniciado } from "../../hooks/useIniciado"

export default function Control() {
    const { estaIniciado, toggleIniciado } = useIniciado()
    return(
      <div className="card">
      <button onClick={() => toggleIniciado()}>{
        estaIniciado? 'Pausar': 'Iniciar'
      }</button>
      <button>Reiniciar</button>
    </div>        
    )
}
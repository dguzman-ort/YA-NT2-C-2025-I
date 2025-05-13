import { useIniciado } from "../../hooks/useIniciado"

export default function Control() {
    const { estaIniciado, toggleIniciado, toggleReiniciar } = useIniciado()
    return(
      <div className="card">
      <button onClick={() => toggleIniciado()}>{
        estaIniciado? 'Pausar': 'Iniciar'
      }</button>
      <button onClick={() => toggleReiniciar()}>Reiniciar</button>
    </div>        
    )
}
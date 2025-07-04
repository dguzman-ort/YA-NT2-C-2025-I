const Counters = ({ tareas }) => {
  // const tareasPendientes = tareas.filter(tarea => !tarea.realizada)
  // console.log("pendientes", tareasPendientes)

  const tareasPendientes = tareas.reduce(
    (acumulador, tarea) => {
      // console.log(acumulador, tarea)
      return tarea.realizada ? acumulador : acumulador + 1
    }, 0)
  return (
    <div className="flow-right controls">
      <span>Tareas: <span id="item-count">{tareas.length}</span></span>
      <span>Pendientes: <span id="unchecked-count">{tareasPendientes}</span></span>
    </div>
  )
}

export default Counters

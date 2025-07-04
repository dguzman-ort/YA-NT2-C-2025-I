const Tarea = ({ tarea, updateTarea, deleteTarea }) => {
  return (
    <li className="todo-container">
      <input type="checkbox" id="todo-checkbox" className="todo-checkbox" checked={tarea.realizada} onChange={() => updateTarea(tarea.id)} />
      <span className="title">{tarea.nombre}</span>
      <button className="button todo-delete" onClick={() => deleteTarea(tarea.id)}> X </button>

    </li>
  )
}

export default Tarea
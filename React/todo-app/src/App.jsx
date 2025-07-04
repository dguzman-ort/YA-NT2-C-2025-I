import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarea from './components/Tarea'
import Counters from './components/Counters'

function App() {

  const [tareas, setTareas] = useState([])
  

  const addTodo = () => {
    const nombre = prompt('Ingrese el nombre de la tarea')
    if (nombre){
      const nuevaTarea = {
        id: new Date().getTime(),
        nombre,
        realizada: false
      }
      // tareas.push(nuevaTarea)
      setTareas([...tareas, nuevaTarea])
      console.log('Tarea agregada', nuevaTarea)
    }
  }

  const updateTarea = (id) => {
    console.log('updateTarea', id)
    const index = tareas.findIndex(tarea => tarea.id === id)
    // console.log('index', index)
    const tareaActualizada = tareas[index]
    // console.log('tareaActualizada', tareaActualizada)
    tareaActualizada.realizada = !tareaActualizada.realizada
    tareas[index] = tareaActualizada
    setTareas([...tareas])
    // setTareas(tareas)
  }

  const updateTarea2 = (id) => {
    setTareas(tareas.map(tarea => {
      return tarea.id === id ? {...tarea, realizada: !tarea.realizada} : tarea
    }))
  }

  const deleteTarea = (id) => {
    console.log('deleteTarea', id)
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  return (
    <>
      <div className="container center">
        <h1 className="center title">Lista de tareas</h1>
        <Counters tareas={tareas} />
        <button className="button center" onClick={addTodo}>Agregar Tarea</button>
        <ul id="todo-list" className="todo-list">
          {
            tareas.map(tarea => <Tarea tarea={tarea} key={tarea.id} updateTarea={updateTarea} deleteTarea={deleteTarea} />)
          }


        </ul>
      </div>

    </>
  )
}

export default App

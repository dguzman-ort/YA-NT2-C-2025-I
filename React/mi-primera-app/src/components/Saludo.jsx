const Saludo = ({nombre, elemento}) => {
  console.log(nombre, elemento)
  const isH1   = elemento === 'h1'
  const nombreSaludo = nombre? nombre : 'Desconocido'
  return (
    <div>

      {isH1 ? 
        <h1>Hola {nombreSaludo}</h1> : 
        <h2>Hola {nombreSaludo}</h2>
      }
    </div>
  )
}

export default Saludo

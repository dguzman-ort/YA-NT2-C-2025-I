import { useEffect, useState } from "react"
import { useIniciado } from "../../hooks/useIniciado"

let intervalID

export default () => {
  const { estaIniciado } = useIniciado()
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Detecto el cambio del prop", estaIniciado)
    if (estaIniciado){
      intervalID = setInterval(() => {   
        //console.log(`Valor del contador: ${count}`)     
        // setCount(count + 1)
        
        setCount((valorPrevio) => {
          console.log(`Valor del contador: ${valorPrevio}`)
          return valorPrevio + 1

        })

      },1000)

      console.log("ID interval: ", intervalID)
    }else{
      // Limpio el interval
      clearInterval(intervalID)
    }
  
    // 
  }, [estaIniciado])

  return (
    <div><h1>{count}</h1></div>
  )
}
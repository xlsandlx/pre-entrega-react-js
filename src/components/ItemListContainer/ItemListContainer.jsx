import { useState } from "react"
import { useEffect } from "react"
import { gFetch } from "../../utils/gFetch"

export const ItemListContainer = ({ greeting }) => {
const [productos, setProductos] = useState([])


useEffect(()=>{
  gFetch()
    .then(res => {
      setProductos(res)
    })
    .catch(error => console.log(error))
    .finally(()=> console.log('siempre y al ultimo'))
}, [])

console.log(productos)
    return (
      <div>
        {productos.map(producto => <li key={producto.id}>{producto.name}</li>)}
      </div>
    )
  }


import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { gFetch } from "../../utils/gFetch"



export const ItemDetailContainer = () => {
  const  id  = useParams()
  const idProductos = parseInt(Object.values(id))
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(()=>{
  gFetch()
    .then(res => {
      setProductos(res)
    })
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))
}, [])

  
const found = productos.find(producto => productos.id === idProductos)
console.log(found)

return (
  <div>ItemDetailContainer</div>
)
}

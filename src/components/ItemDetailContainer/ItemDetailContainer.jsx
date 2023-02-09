import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { gFetch } from "../../utils/gFetch"



export const ItemDetailContainer = () => {
  const id = useParams()
  const idProductos = parseInt(Object.values(id))
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    gFetch()
      .then(res => {
        setProductos(res.filter(producto => parseInt(producto.id) == idProductos))
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))

  }, [])


  return (
    <div className='contenedor'>
      {loading ?
        <h2 className='text-dark' >Cargando...</h2>
        :
        <div key={productos[0].id} className='card w-60 card-color m-5' >
          <img src={productos[0].foto} alt='foto' />
          <div className='card-body card-body-color'>
            <h4 className='card-title mb-4'>{productos[0].name}</h4>
            <p>Marca: {productos[0].marca}</p>
            <p>Categoria: {productos[0].categoria} </p>
            <p>Precio: {productos[0].price} </p>
          </div>
        </div>}
    </div>
  )
}

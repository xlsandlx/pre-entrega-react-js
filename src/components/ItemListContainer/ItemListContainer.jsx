import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { gFetch } from "../../utils/gFetch"

export const ItemListContainer = ({ greeting }) => {
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

console.log(productos)
    return (
      <div className='contenedor'>
        {loading ? 
        <h2 className='text-dark' >Cargando...</h2>
        :
        productos.map(producto => <div key={producto.id} className='card w-60 card-color m-5' >
                                      <Link to={`/detalle/${producto.id}`} className='text-decoration-none text-dark' >
                                        <img src={producto.foto} alt='foto' />
                                      <div className='card-body card-body-color'>
                                        <h4 className='card-title mb-4'>{producto.name}</h4>
                                        <p>Marca: {producto.marca}</p>
                                        <p>Categoria: {producto.categoria} </p>
                                        <p>Precio: {producto.price} </p> 
                                      </div>
                                  </Link>
                                    </div>)}
      </div>
    )
  }


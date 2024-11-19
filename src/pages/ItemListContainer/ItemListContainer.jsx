import { useState, useEffect, useContext } from 'react'
import ItemList from './components/ItemList'
import { pedirDatos } from '../../helpers/pedirDatos'
import { GlobalContext } from '../../App';

const ItemListContainer = () => {
  const { stateGlobal, setStateGlobal} = useContext(GlobalContext);
  const [ query, setQuery] = useState("");
  const { productosTotales } = stateGlobal;
  console.log({productosFiltrados: productosTotales.filter((product) => product.titulo.includes(query))})
  console.log({query})

  const onChange = (e) => {
    setQuery(e.target.value)
  }

    useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            /* setProductos(res) */
            setStateGlobal({
              ...stateGlobal,
              productosTotales: res
            })
        })
    },[])

  return (
    <div>
        <div>
          <input type='text' onChange={onChange} value={query}/>
        </div>
        <ItemList productos={productosTotales.filter((product) => product.titulo.toLowerCase().includes(query.toLowerCase()))}/>
    </div>
  )
}

export default ItemListContainer
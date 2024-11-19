import { useContext, useState } from "react";
import { GlobalContext } from "../../../App";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const ItemDetail = ({item}) => {
  const { id: productId } = useParams();
  const { stateGlobal, setStateGlobal} = useContext(GlobalContext);
  const [counter, setCounter] = useState(0);
  const productoSeleccionado = stateGlobal.productosTotales.find(({ id }) => id === Number(productId));

  const onIncrease = (e) => {
    const { productosAgregados } = stateGlobal;

    setCounter(counter +1)
    const isProductAdded = productosAgregados.find(({ id }) => id === Number(productId))
    if(isProductAdded){
      setStateGlobal({
        ...stateGlobal, 
        productosAgregados: productosAgregados.map((product) => {
          if(Number(productId) === product.id){
            return {
              ...product,
              cantidad: product.cantidad + 1,
              precioTotal: product.precioTotal + productoSeleccionado.precio
            }
          }
          
          return product;

        })
      })
    }else{
      setStateGlobal({
        ...stateGlobal, 
        productosAgregados: productosAgregados.concat({
          id: productoSeleccionado.id,
          cantidad: 1,
          precioTotal: productoSeleccionado.precio,
        })
      })
    }
  }

  const onDecrease = (e) => {
    setCounter(Math.max(counter - 1, 0 ))
    const { productosAgregados } = stateGlobal;
    const isProductAdded = productosAgregados.find(({ id }) => id === Number(productId))
    if(isProductAdded){
      if(isProductAdded.cantidad < 2){
        setStateGlobal({
          ...stateGlobal, 
          productosAgregados: productosAgregados.filter((product) => {
            if(Number(productId) !== product.id){
              return product;
            }
          })
        })
      }else{
        setStateGlobal({
          ...stateGlobal, 
          productosAgregados: productosAgregados.map((product) => {
            if(Number(productId) === product.id){
              return {
                ...product,
                cantidad: product.cantidad - 1,
                precioTotal: product.precioTotal - productoSeleccionado.precio,
              }
            }
            
            return product;
  
          })
        })
      }

     
    }
  }

  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoria: {item.categoria}</p>
                <p className="precio">{item.precio}</p>
            </div>
        </div>
        <div>
          <button onClick={onIncrease}>+</button>
          {counter}
          <button onClick={onDecrease}>-</button>
        </div>
        
    </div>
  )
}

export default ItemDetail
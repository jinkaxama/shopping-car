import React, { useContext } from 'react'
import { GlobalContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const mock = {
    productosAgregados: [
      {
          id: "2",
          cantidad: 5,
          precioTotal: 20,
      },
      {
          id: "3",
          cantidad: 4,
          precioTotal: 30,
      }
    ]
  
  }

const initialProduct = {
          id: "",
          cantidad: 0,
          precioTotal: 1,
}


const Car = () => {
  const navigate = useNavigate();
  const { stateGlobal, setGlobalContext} = useContext(GlobalContext); 
  const { productosAgregados } = stateGlobal;

  const cantidadTotal = productosAgregados.reduce((first, second) => { 
    return first + second.cantidad;
  }, 0);

  const montoTotal = productosAgregados.reduce((first, second) => {
       return first + second.precioTotal;
  }, 0);

  const onClick = () => {
    navigate(-1)
  }

  return (
    <div>
      {`Productos(${cantidadTotal}) S/ ${montoTotal}`}  

      <button>Pagar</button>    
      <button onClick={onClick}>atrás</button> 
    </div>
  )
}

export default Car

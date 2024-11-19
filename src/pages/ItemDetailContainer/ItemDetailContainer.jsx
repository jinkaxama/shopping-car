import { useEffect } from "react"
import { useState } from "react"
import { pedirItemPorId } from "../../helpers/pedirDatos"
import ItemDetail from "./components/ItemDetail"
import { useNavigate, useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const navigate = useNavigate();

    const[item,setItem]=useState(null)

    const id=useParams().id

    const onClick = () => {
      navigate(-1)
    }

    useEffect(()=>{
        pedirItemPorId(Number(id))
        .then((res)=>{
            setItem(res)
        })
    },[id])

  return (
    <div>
        {item && <ItemDetail item={item}/>}

        <button onClick={onClick}>atrás</button>
    </div>
  )
}

export default ItemDetailContainer
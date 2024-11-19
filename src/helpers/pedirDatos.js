import data from "../data/data.json"

export const pedirDatos=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data);
        },500)
    })
}
export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item=data.find((element)=>element.id===id)

    if (item) {
        resolve(item)
    } else {
        reject({error: "No se encontró el producto"})
    }
  })
}
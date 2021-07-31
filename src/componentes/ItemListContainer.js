import React , {useEffect,useState} from "react";
import {p} from "./productos"
import ItemList from "./ItemList"

const ItemListContainer = () => {

  const [productos,setUsuarios] = useState([])
  
  //Este efecto se ejecuta por CADA render
  //useEffect(()=>{})

  //Este efecto se ejecuta SOLO en el primer render
  useEffect(()=>{
    
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(productos)
      },2000)
    })

    promise.then((productos)=>setUsuarios(p))
  
  },[])

  
  return (
    <div>
      Item List Container
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer

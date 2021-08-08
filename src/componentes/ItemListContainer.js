import React , {useEffect,useState} from "react";
import {p} from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos,setUsuarios] = useState([])
  const params = useParams();
  console.log(params)
  
  //Este efecto se ejecuta por CADA render
  //useEffect(()=>{})

  //Este efecto se ejecuta SOLO en el primer render
  useEffect(()=>{
    
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
         resolve(productos)    
      },2000)
    })
      //promise.then((productos)=>setUsuarios(p))  
      promise
      .then((productos)=>{
        if(params.categoria){
            setUsuarios(p.filter(prod=>prod.categoria === params.categoria))
        }else{
            setUsuarios(p)
        }
      })
      .catch (err => {
        console.log("error")
      })
  },[])


  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer

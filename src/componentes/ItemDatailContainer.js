import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"
import {p} from "./productos"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const onAdd = (cantidad) => {
  console.log(`Has agregado al carrito ${cantidad} producto/s`) }

    const [prod, setProducts] = useState([])
    const id = useParams();
    console.log(id);
    
    useEffect(()=>{
      
      const promesa = getItem()
      promesa.then(json=> {
          setProducts(json)
      })
    }, [id])
  
      const getItem = () => {
  
  
        const promesa = new Promise ((res, rej) => {
          setTimeout(() => {
  
            if(id.id) {
              res(p.filter(producto => producto.id == id.id))}
              
          }, 2000)
        })
        return promesa;
      }
  
  return (
    <>
       <div className="container">
            {prod.map(producto=> {
            return <ItemDetail key={producto.id} producto={producto} stock={5} initial={1} onAdd={onAdd}/>})}
        </div>
    </>)    
    }

export default ItemDetailContainer
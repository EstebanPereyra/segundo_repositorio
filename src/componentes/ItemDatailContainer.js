import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {


const [prod, setProducts] = useState([])


//Este efecto se ejecuta SOLO en el primer render
useEffect(() => {
    obtenerDatos()}, [])

const obtenerDatos = () => {
    fetch('https://fakestoreapi.com/products?limit=5')
    .then(res=>res.json())
    .then(json=> setProducts(json));
      
}
return (
    <>
       <div className="container mt-5 mb-5">
            {prod.map(producto=> {
            return <ItemDetail key={producto.id} producto={producto}/>})}
        </div>
    </>)    
    }

export default ItemDetailContainer
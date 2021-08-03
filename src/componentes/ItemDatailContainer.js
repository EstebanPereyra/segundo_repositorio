import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {


const [prod, setProducts] = useState([])

//Este efecto se ejecuta SOLO en el primer render
useEffect(() => {
    obtenerDatos()} , [])

const obtenerDatos = () => {
    fetch('https://fakestoreapi.com/products?limit=5')
    .then(res=>res.json())
    .then(json=>console.log(json))
    // .then(json=> { 
    //     const {data = []} = json
    //     setProducts(data)
    // })
const getItems = () => {
    return(prod);
}

}
return (
    <>
    {console.log(prod)}
       <div className="container mt-5 mb-5">
           <ItemDetail/> 
        </div>
    </>)    
    }

export default ItemDetailContainer
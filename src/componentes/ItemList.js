import React from "react"
import Item from "./Item"

const ItemList = ({productos}) => {
  
  const onAdd = (cantidad) => {
  console.log(`Has agregado al carrito ${cantidad} producto/s`) }
  return (
    <div className="d-flex justify-content-center flex-wrap mt-5">
        {productos.map(producto=>{
          return <Item key={producto.id} producto={producto} stock={5} initial={1} onAdd={onAdd}/>
        })}
    </div>
    
  )
}

export default ItemList
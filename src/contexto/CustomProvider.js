import { useState } from "react"
import  {Provider}  from "./contexto"


const CartProvider = ({children}) => {

    const [ordenes,setOrdenes] = useState([])
    

    const addItem = (producto, cantidad) => {
        if(!isInCart(producto.id)){
            const orden = {
                producto:producto,
                cantidad:cantidad
            }
            setOrdenes([...ordenes,orden])
        }
    }

    const removeItem = (productoId) => {
        const ordenes_filtradas = ordenes.filter(orden => orden.producto.id !== productoId)
        setOrdenes(ordenes_filtradas)
    }

    const clear = () => {
        setOrdenes([])
    }

    const isInCart = (productoId) => {
        let exists = false
        ordenes.map(orden=>{
            if(orden.producto.id === productoId){
                exists = true
            }
        })
        return exists
    }

    function getTotal() {
        if (ordenes.length > 0) {
            let total = 0;
            ordenes.forEach((orden) => {
                total =
                    total +
                    orden.cantidad * orden.producto.price;
            });
            return total;
        }
    }

    return (
        <Provider value={{ordenes,addItem,removeItem,clear,isInCart, getTotal}}>
            {children}
        </Provider>
    )
}

export default CartProvider
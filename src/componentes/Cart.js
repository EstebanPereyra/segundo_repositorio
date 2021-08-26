import React from 'react';
import contexto from "../contexto/contexto";
import { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Form from './Form'


const Cart = () => {

    const { ordenes, removeItem, clear } = useContext(contexto)
    const [confirmacion, setConfirmacion] = useState(false)
    const [items, setItems] = useState({})
    console.log(ordenes);
    console.table(items)


    

    const mostrarFormulario = () => {
        setConfirmacion(true)
    }

    const guardarItems = () => {
        let items = [];
        ordenes.map(element => {
            items.push(
            { 
                id : element.producto.id,
                title : element.producto.title,
                price : element.producto.price,
                total : element.producto.price * element.cantidad, 
                date : new Date()          
            })
        });
        setItems(items)
    }


useEffect(() => {
        if (ordenes.length > 0) {
            guardarItems();
        }
    }, [ordenes]);


    return (
        <div>
            {!ordenes.length &&
                <div className="text-center m-5 p-5">
                    <p>¡No hay productos agregados al carrito!</p>
                    <Link className="btn btn-dark" to="/">Volver a la página de inicio</Link>
                </div>}
            {ordenes.map(orden => {

                return (
                    <>
                        <div className="m-5 p-5 d-flex justify-content-between">
                            <div>
                                <h3>{orden.producto.title}</h3>
                            </div>
                            <div>
                                <img src={orden.producto.pictureUrl} width="50" alt="producto"></img>
                            </div>
                            <div>
                                <p>Cantidad: {orden.cantidad}</p>
                            </div>
                            <div>
                                <p>Precio unitario: {orden.producto.price}</p>
                            </div>
                            <div>
                                <p>Precio total: {orden.producto.price * orden.cantidad}</p>
                            </div>
                            <button className="btn btn-dark" onClick={() => removeItem(`${orden.producto.title}`)}>eliminar productos</button>
                    
                        </div>
                        <hr></hr>
                    </>
                )
                
            })}
           
            {
                !confirmacion ? <Link onClick={() => mostrarFormulario()} className="btn btn-dark m-4" to="/cart">Terminar mi compra</Link>
                    : (

                            <Form items={items}/>

                    )
            
            }

        </div>
    );
}
export default Cart;

import React from 'react';
import contexto from "../contexto/contexto";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import Form from './Form'


const Cart = () => {

    const { ordenes, removeItem, getTotal} = useContext(contexto)
    const [confirmacion, setConfirmacion] = useState(false)

    const mostrarFormulario = () => {
        setConfirmacion(true)
    }

    return (
        <div>
            {!ordenes.length &&
                <div className="text-center m-5 p-5">
                    <p>¡No hay productos agregados al carrito!</p>
                    <Link className="btn btn-dark" to="/">Volver a la página de inicio</Link>
                </div>}
            {ordenes.map(orden => {

                return (
                    <div key={orden.producto.id}>
                        
                        <div className="m-5 p-5 d-flex justify-content-between">
                            <div>
                                <h3>
                                    {orden.producto.title}
                                </h3>
                            </div>
                            <div>
                                <img src={orden.producto.pictureUrl} width="50" alt="producto"></img>
                            </div>
                            <div>
                                <p> Cantidad: {orden.cantidad}</p>
                            </div>
                            <div>
                                <p>Precio unitario: {orden.producto.price}</p>
                            </div>
                            <div>
                                <p>Precio total: {orden.producto.price * orden.cantidad}</p>
                            </div>
                            <button className="btn btn-dark" onClick={() => removeItem(`${orden.producto.id}`)}>eliminar productos</button>

                        </div>
                        
                        <hr></hr>
                    </div>

                )

            })}

                <h4 className="text-center">{getTotal()}</h4>
            {
                !confirmacion ? 
                <div className="text-center">
                <button onClick={() => mostrarFormulario()} className="btn btn-dark m-4">Terminar mi compra</button>
                </div>  
                    : (
                        <>
                            <div>
                                <Form />
                            </div>
                        </>
                    )

            }

        </div>
    );
}
export default Cart;

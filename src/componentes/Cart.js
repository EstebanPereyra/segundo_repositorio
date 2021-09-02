import React from 'react';
import contexto from "../contexto/contexto";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import Form from './Form'


const Cart = () => {

    const { ordenes, removeItem, getTotal } = useContext(contexto)
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
                    <>
                        <div className="m-5 p-5 d-flex justify-content-between">
                            <div>
                                <h3 key={orden.producto.id}>
                                    {orden.producto.title}
                                </h3>
                            </div>
                            <div>
                                <img key={orden.producto.pictureUrl} src={orden.producto.pictureUrl} width="50" alt="producto"></img>
                            </div>
                            <div>
                                <p key={orden.cantidad}> Cantidad: {orden.cantidad}</p>
                            </div>
                            <div>
                                <p key={orden.producto.price}>Precio unitario: {orden.producto.price}</p>
                            </div>
                            <div>
                                <p key={orden.producto.price * orden.cantidad}>Precio total: {orden.producto.price * orden.cantidad}</p>
                            </div>
                            <button key={orden.producto.id} className="btn btn-dark" onClick={() => removeItem(`${orden.producto.id}`)}>eliminar productos</button>

                        </div>
                        <hr></hr>
                    </>
                )

            })}

                <h4 className="text-center">{getTotal()}</h4>

            {
                !confirmacion ? <Link onClick={() => mostrarFormulario()} className="btn btn-dark m-4" to="/cart">Terminar mi compra</Link>
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

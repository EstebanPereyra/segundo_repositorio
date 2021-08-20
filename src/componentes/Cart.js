import React from 'react';
import contexto from "../contexto/contexto";
import { useContext } from 'react';
import { Link } from "react-router-dom"

const Cart = () => {

    const { ordenes, removeItem, clear } = useContext(contexto)

    console.log(ordenes)
    return (
        <div>
            {!ordenes.length &&
                <div className="m-5 p-5 text-center">
                    <h1>Carrito de compras</h1>
                    <p>¡No hay productos agregados!</p>
                    <Link className="btn btn-dark" to="/">Volver a la página principal</Link>
                </div>}
            {ordenes.map(orden => {

                return (
                    <div>
                        <div className="d-flex justify-content-around flex-wrap mt-5">
                            <div className="card border-secondary mb-3 m-5 col-xl-3 col-md-4 col-sm-6">
                                <div className="card-header text-center">INDUMENTARIA</div>
                                <div className="card-body text-secondary">
                                    <h5 className="card-title text-center">{orden.producto.title}</h5>
                                    <img src={orden.producto.pictureUrl} className="card-img-top" alt="producto"></img>
                                    <p className="card-text text-center">{orden.producto.description}</p>
                                    <p className="card-text text-center">Precio unitario: {orden.producto.price}</p>
                                    <p className="card-text text-center">Precio total: ${orden.producto.price * orden.cantidad}</p>
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-dark" onClick={() => removeItem(orden.producto.id)}>eliminar productos</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )

            })}
            {/* <button onClick={crearOrden}>confirmar compra</button>
            {confirmacion && <p>Confirmacion de compra: {confirmacion}</p>} */}
        </div>
    );
}

export default Cart;
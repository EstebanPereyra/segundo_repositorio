import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
// import contexto from "./context/cartContext";


const ItemDetail = ({ producto }) => {


    const [confirmacion, setConfirmacion] = useState(false)
    const [cantidad, setCantidad] = useState(0)

    const onAdd = (cantidad) => {
        setConfirmacion(true)
        setCantidad(cantidad)
    }

    return (
        <>
            <div className="row d-flex justify-content-center flex-wrap mt-5 pt-5">
                <div className="col-md-10">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="images p-0">
                                    <div className="text-center p-0">
                                        <img id="main-image" src={producto.pictureUrl} className="card-img-top" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product p-4">
                                    <div className="mt-4 mb-3 text-center">
                                        <h5 className="text-uppercase text-center">{producto.title}</h5>
                                        <div className="price d-flex flex-row align-items-center text-center">
                                            <span className="act-price"><b>PRECIO:</b> ${producto.price}</span>
                                        </div>
                                    </div>
                                    <p className="about text-center">{producto.description}</p>
                                    <div className="d-grid gap-2">
                                    {!confirmacion ? <ItemCount onAdd={onAdd} stock={producto.stock} initial={producto.stock >= 1 ? 1 : 0}/> 
                                    : (
                                    <button>
                                        <Link className="btn btn-dark m-4" to="/cart">Terminar mi compra</Link>
                                    </button>
                                     )
                                     }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail
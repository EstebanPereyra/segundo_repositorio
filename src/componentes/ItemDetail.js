import  React from 'react';

const ItemDetail = ({producto}) => {

    return (
        <>
        <div className="row d-flex justify-content-center">
            <div className="col-md-10">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="images p-3">
                                <div className="text-center p-4"> 
                                    <img id="main-image" src={producto.image} width="250" /> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product p-4">
                                        <div className="mt-4 mb-3"> 
                                            <h5 className="text-uppercase">{producto.title}</h5>
                                            <div className="price d-flex flex-row align-items-center"> 
                                                <span className="act-price">${producto.price}</span>
                                            </div>
                                        </div>
                                        <p className="about">{producto.description}</p>                                        
                                        <div>
                                            <div className="cart mt-4 align-items-center"> 
                                                <button className="btn btn-dark text-uppercase mr-2 px-4">Agregar al carrito</button> 
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
 )}

export default ItemDetail
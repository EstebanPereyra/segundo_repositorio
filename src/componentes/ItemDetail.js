import  React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({producto, stock, initial, onAdd}) => {


  const [contador, setContador] = useState(initial);
  
  const sumarContador = () => {
      if(contador <= stock) {setContador(contador + 1);}
      else {
          // console.log('No hay más stock');
      }
  
  }

  const restarContador = () => {
      if(contador <= 0) {
          // console.log('No se puede restar más');
      } else {
      setContador(contador - 1);}
  }

  const confirmar = () => {
      if(stock > 0){
          onAdd(contador)
      }
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
                                        <p className="text-center">Cantidad: {contador}</p>
                                        <div className="text-center">
                                            <button className="btn btn-dark m-4" type="submit" onClick={restarContador}>-</button>
                                            <button className="btn btn-dark m-4" type="submit" onClick={sumarContador}>+</button>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-dark m-2 p-1" onClick={confirmar} type="button">Agregar al Carrito</button>
                                            <Link className="btn btn-dark m-2 p-1" type="button" to="/">Volver al inicio</Link>
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
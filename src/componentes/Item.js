import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto, stock, initial, onAdd}) => {

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

  return     <>
  <div className="card border-secondary mb-3 m-5 col-xl-3 col-md-4 col-sm-6">
      <div className="card-header text-center">INDUMENTARIA</div>
       <div className="card-body text-secondary">
          <h5 className="card-title text-center">{producto.title}</h5>
          <img src={producto.pictureUrl} className="card-img-top" alt="Remera azul"></img>
          <p className="card-text text-center">{producto.description}</p>
          <p className="card-text text-center">Precio: {producto.price}</p>
      </div>
      <p className="text-center">Cantidad: {contador}</p>
      <div className="text-center">
        <button className="btn btn-dark m-4" type="submit" onClick={restarContador}>-</button>
        <button className="btn btn-dark m-4" type="submit" onClick={sumarContador}>+</button>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-dark m-2 p-1" onClick={confirmar} type="button">Agregar al Carrito</button>
        <Link className="btn btn-dark m-2 p-1" type="button" to={`/item/${producto.id}`}>Ver Detalles</Link>
      </div>
  </div>
</>
};

export default Item;
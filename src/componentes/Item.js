import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {

 return     <>
  <div className="card border-secondary mb-3 m-5 col-xl-3 col-md-4 col-sm-6">
      <div className="card-header text-center">INDUMENTARIA</div>
       <div className="card-body text-secondary">
          <h5 className="card-title text-center">{producto.title}</h5>
          <img src={producto.pictureUrl} className="card-img-top" alt="Remera azul"></img>
          <p className="card-text text-center">{producto.description}</p>
          <p className="card-text text-center">Precio: ${producto.price}</p>
      </div>
      <div className="d-grid gap-2">
        <Link className="btn btn-dark m-2 p-1" type="button" to={`/item/${producto.id}`}>Ver Detalles</Link>
      </div>
  </div>
</>
};

export default Item;
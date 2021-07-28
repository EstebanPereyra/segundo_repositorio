import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

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
        <div className="card border-secondary mb-3 m-5 col-xl-3 col-md-4 col-sm-6">
            <div className="card-header text-center">REMERAS</div>
             <div className="card-body text-secondary">
                <h5 className="card-title text-center">Remera algodón</h5>
                <img src="https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_azul_lisa_2.jpg" className="card-img-top" alt="Remera azul"></img>
                <p className="card-text text-center">Remera lisa de algodón, varios colores y talles disponibles.</p>
                <p className="text-center">Cantidad: {contador}</p>
                <div className="text-center">
                    <button className="btn btn-dark m-4" type="submit" onClick={restarContador}>-</button>
                    <button className="btn btn-dark m-4" type="submit" onClick={sumarContador}>+</button>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-dark" onClick={confirmar} type="button">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    </>
)}
export default ItemCount
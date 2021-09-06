import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);  

    const sumarContador = () => {
        if (contador <= stock) { setContador(contador + 1); }
    }

    const restarContador = () => {
        if (contador <= 0) {
           
        } else {
            setContador(contador - 1);
        }
    }

    const confirmar = () => {
        if (stock > 0) {
            onAdd(contador)
        }
    }


    return (
        <>
            <div className="text-center">
                <p className="text-center">Cantidad: {contador}</p>
                <button className="btn btn-dark m-4" type="submit" onClick={restarContador}>-</button>
                <button className="btn btn-dark m-4" type="submit" onClick={sumarContador}>+</button>
                <button className="btn btn-dark" onClick={confirmar} type="button">Confirmar cantidad</button>
            </div>
        </>
    )
}
export default ItemCount
import { useContext } from "react";
import contexto from "../contexto/contexto";

const CartWidget = () => {

    const {ordenes} = useContext(contexto)
    return (
    <>
        <i className="bi bi-cart3"></i>
        {ordenes.length ? ordenes.length : null}
    </>
)}
export default CartWidget
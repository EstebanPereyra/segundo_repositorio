import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import { firestore } from "../firebase";
import { useHistory, useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const onAdd = (cantidad) => {
        console.log(`Has agregado al carrito ${cantidad} producto/s`)
    }

    const [prod, setProducts] = useState([])
    const { id } = useParams();
    const history = useHistory()



    useEffect(() => {
        const db = firestore;
        const collection = firestore.collection("productos");
        let detalle = collection.doc(id).get()
        detalle
            .then(doc => {
                if (doc.exists) {
                    setProducts({id: doc.id, ...doc.data()})
                } else {
                    history.push("/")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div>
            <ItemDetail key={prod.id} prod={prod} stock={5} initial={1} onAdd={onAdd}/>
        </div>
    );
}
export default ItemDetailContainer
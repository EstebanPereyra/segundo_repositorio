import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import { firestore } from "../firebase";
import { useHistory, useParams, Link } from "react-router-dom";
import Loading  from "./Loading";

const ItemDetailContainer = () => {

    const onAdd = (cantidad) => {
        console.log(`Has agregado al carrito ${cantidad} producto/s`)
    }

    const [prod, setProducts] = useState([])
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {

        const collection = firestore.collection("productos");
        let detalle = collection.doc(id).get()
        detalle
            .then(doc => {
                if (doc.exists) {
                    setProducts({ id: doc.id, ...doc.data() })
                } else {
                    setError(true);
                    history.push("/")
                }
            })
            .catch(err => {
                console.log(err)
            }) 
            .finally(() => { 
                setLoading(false);
            });         
    }, [])


    return (
        <>
        { loading && <Loading/> }
            { error && <div className='container'>
                    <div className='py-5 text-center mt-5'>
                        <h4 className='mt-5'>El producto no existe en nuestra Tienda de E-commerce.</h4>
                        <Link className="btn btn-dark" to="/">Volver al inicio</Link>
                    </div>
                </div> 
            }
        
        <div>
            <ItemDetail key={prod.id} prod={prod} stock={5} initial={1} onAdd={onAdd} />
        </div>
        </>
    );
};

export default ItemDetailContainer
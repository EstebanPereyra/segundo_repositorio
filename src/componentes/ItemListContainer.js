import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const params = useParams();

  useEffect(() => {

    const db = firestore

    const collection = db.collection("productos")


    if (!params.categoria) {
      const query = collection.get();
      query
        .then((resultados) => {

          const resultado_parseado = [];
          resultados.forEach((documento) => {
            const id = documento.id;
            const data = documento.data();
            const data_final = { id, ...data };

            resultado_parseado.push(data_final);
          });

          setProductos(resultado_parseado);

        })

    } else {

      let query = collection.where("categoria", "==", params.categoria)

      query = query.get()
      query
        .then((snapshot) => {
          const documentos = snapshot.docs
          const productos = documentos.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
          setProductos(productos)
        })

    }
  }, [params.categoria])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer

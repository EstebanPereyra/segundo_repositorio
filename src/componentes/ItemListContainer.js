import React , {useEffect,useState} from "react";
import {p} from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos,setUsuarios] = useState([])
  const params = useParams();
    
  //Este efecto se ejecuta por CADA render
  //useEffect(()=>{})

  //Este efecto se ejecuta SOLO en el primer render
  useEffect(()=>{
    
    const promesa = getItem()
    promesa.then(json=> {
      setUsuarios(json)
    })
  }, [params.categoria])

    const getItem = () => {


      const promesa = new Promise ((res, rej) => {
        setTimeout(() => {

          if(params.categoria) {
            res(p.filter(producto => producto.categoria == params.categoria))
          } else {
            res(p)
          }

        }, 2000)
      })
      return promesa;
    }


  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer

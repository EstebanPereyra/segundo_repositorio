import { useState, useContext } from "react"
import { firestore } from "../firebase";
import contexto from "../contexto/contexto";

const Form = ({id}) => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState(false);
    const { ordenes, getTotal } = useContext(contexto)


    const [...productos] = [...ordenes];
    console.log(productos)
    const items = [];

    ordenes.forEach(function(producto) {
        
        items.push(producto.producto.id, producto.producto.title, producto.producto.price)
    }

    )

    const guardarNombre = (e) => {
        console.log('Nombre guardado');
        const input = e.target;
        const valor = input.value;
        setNombre(valor);
    }

    const guardarApellido = (e) => {
        console.log('Apellido guardado');
        const input = e.target;
        const valor = input.value;
        setApellido(valor);
    }

    const guardarEmail = (e) => {
        console.log('Email guardado');
        const input = e.target;
        const valor = input.value;
        setEmail(valor);
    }

    const guardarTelefono = (e) => {
        console.log('Telefono guardado');
        const input = e.target;
        const valor = input.value;
        setTelefono(valor);
    }


    const realizarPedido = () => {
        if (validarCampos()) {
            const db = firestore;
            const collection = db.collection("ordenes")
            const bayer = { usuario: {nombre: nombre, apellido: apellido, email: email, telefono: telefono}, items : items, date: new Date(), total:getTotal()  }
            // const bayer = { usuario: {nombre: nombre, apellido: apellido, email: email, telefono: telefono}, items: [...ordenes], date: new Date(), total:getTotal()  }
            const query = collection.add(bayer);
            setError(false);
            console.log("Datos validados correctamente")
        } else {
            setError(true);
        }

    }

    const validarCampos = () => {
        if (nombre.trim().length && apellido.trim().length && email.trim().length && telefono.trim().length) {
            return true
        } else {
            return false
        }
    }

    return (
        <>
            {error ? <p>Por favor, completar todos los campos</p> : null}
            <h2 className="text-center m-5">Finaliza la compra</h2>
            <div className="row g-3 p-5">
                <div className="col-md-6">
                    <label htmlFor="nombre" className="col-form-label">Nombre</label>
                    <input type="text" placeholder="Nombre" className="form-control" id="nombre" onChange={guardarNombre} value={nombre}></input>
                </div>
                <div className="col-md-6">
                    <label htmlFor="apellido" className="col-form-label">Apellido</label>
                    <input type="text" placeholder="Apellido" className="form-control" id="apellido" onChange={guardarApellido}></input>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" placeholder="Correo Electrónico" className="form-control" id="email" onChange={guardarEmail}></input>
                </div>
                <div className="col-md-6">
                    <label htmlFor="telefono" className="col-form-label">Teléfono de contacto</label>
                    <input type="number" placeholder="Teléfono" className="form-control" id="telefono" onChange={guardarTelefono}></input>
                </div>
                <div className="col-12">
                    <button className="btn btn-dark" type="submit" onClick={realizarPedido} key={id}>TERMINAR LA COMPRA</button>
                </div>
            </div>
        </>
    )
}

export default Form
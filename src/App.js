import Header from "./componentes/Header.js"
import ItemListContainer from "./componentes/ItemListContainer.js"
import ItemCount from "./componentes/ItemCount.js"

const App = () => {

    // const onAdd = (cantidad) => {
    //     console.log(`Has agregado al carrito ${cantidad} remera/s`)
    // onAdd={onAdd} }

    return (
    <>
        <Header/>       
        <ItemListContainer stock={5} initial={1}/>
        <ItemCount/>
    </>
)}
export default App
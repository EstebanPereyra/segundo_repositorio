import Header from "./componentes/Header.js"
import ItemListContainer from "./componentes/ItemListContainer.js"
import ItemCount from "./componentes/ItemCount.js"
import ItemDetailContainer from "./componentes/ItemDatailContainer.js"
import {BrowserRouter, Route, Switch} from "react-router-dom"

const App = () => {

    return (
    <>
        <BrowserRouter>
        <Header/>       
        <ItemListContainer/>
        <ItemCount/>
        <ItemDetailContainer/>
        {/* <Switch>
            <Route path="/" component={ItemDetailContainer} exact/>
        </Switch> */}
        </BrowserRouter>
    </>
)}
export default App
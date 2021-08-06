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
            {/* <ItemCount/> */}
            <Switch>
                <Route path="/" component={ItemListContainer} exact/>
                <Route path="/categoria/1" component={ItemListContainer}/>
                <Route path="/categoria/2" component={ItemListContainer}/>
            </Switch>
            <ItemDetailContainer/>
        </BrowserRouter>
    </>
)}
export default App
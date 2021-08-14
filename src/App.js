import Header from "./componentes/Header.js"
import ItemListContainer from "./componentes/ItemListContainer.js"
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
                
                <Route path="/categoria/:categoria" component={ItemListContainer}/>

                <Route path="/item/:id" component={ItemDetailContainer}/>
                    
            </Switch>
        </BrowserRouter>
    </>
)}
export default App
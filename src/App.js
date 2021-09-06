import Header from "./componentes/Header.js"
import ItemListContainer from "./componentes/ItemListContainer.js"
import ItemDetailContainer from "./componentes/ItemDatailContainer.js"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Cart from "./componentes/Cart.js"
import CustomProvider from "./contexto/CustomProvider"
import Footer from "./componentes/Footer.js"
import ItemDetail from "./componentes/ItemDetail.js"

const App = () => {

    return (
        <>
            <CustomProvider>
                <BrowserRouter>
                    <Header />
        
                    <Switch>
                        <Route path="/" component={ItemListContainer} exact />

                        <Route path="/categoria/:categoria" component={ItemListContainer} />

                        <Route path="/item/:id" component={ItemDetailContainer} />

                        <Route path="/cart" component={Cart} />

                        <Route path="/itemdetail" component={ItemDetail} />

                    </Switch>
                    <Footer />
                </BrowserRouter>
            </CustomProvider>
        </>
    )
}
export default App
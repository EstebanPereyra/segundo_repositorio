import CartWidget from "./CartWidget.js"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (

    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Virtual Commerce</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/categoria/1">Categoria 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/categoria/2">Categoria 2</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <CartWidget />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)}


export default NavBar
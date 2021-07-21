//1.-) Tener React scope
import React from "react"
//1.a) Importar estilos, iconos y jquery de Boostrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle"
//2.-) Tener React_DOM en scope
import ReactDOM from "react-dom"
//3.-) Crear un componente (un componente siempre es una función)
// const App = () => "Hola mundo"
import App from "./App"
//4.-) Renderizar la aplicación
ReactDOM.render(<App/>, document.getElementById('root'));


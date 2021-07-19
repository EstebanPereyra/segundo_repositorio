//1.-) Tener React scope
import React from "react"
//2.-) Tener React_DOM en scope
import ReactDOM from "react-dom"
//3.-) Crear un componente (un componente siempre es una función)
// const App = () => "Hola mundo"
import App from "./App"
//4.-) Renderizar la aplicación
ReactDOM.render(<App/>, document.getElementById('root'));


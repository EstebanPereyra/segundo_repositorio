# Proyecto final del Curso de React - Coderhouse

[![GitHub Profile](https://img.shields.io/badge/GitHub-informational?style=for-the-badge&logo=GitHub&logoColor=171515&color=23272d)](https://github.com/EstebanPereyra)
[![LinkedId](https://img.shields.io/badge/LinkedIn-informational?style=for-the-badge&logo=linkedin&logoColor=0077b5&color=23272d)](https://www.linkedin.com/in/esteban-josue-pereyra-677348211/)
[![Contact Me](https://img.shields.io/badge/Email-informational?style=for-the-badge&logo=Mail.Ru&logoColor=fff&color=23272d)](mailto:estebanjosuepereyra@gmail.com)

Este trabajo constituye el proyecto final que he entregado en el curso de ReactJS dictado en el Instituto "CoderHouse", el cual, forma parte de la carrera de desarrollador web full-stack.
Se trata de una Tienda Virtual utilizando React, React Hooks, React Router, Librería de Bootstrap y Firebase como base de datos.

## Librerias
## Bootstrap
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-informational?style=for-the-badge&logo=bootstrap&logoColor=6f42c1&color=23272d)](https://getbootstrap.com)

Me he inclinado por utilizar la librería de Bootstrap en cuanto cumple las necesidades de esta capacitación y resulta fácil de implementar. Es que, si bien prefiero utilizar css puro para darle estilos a los sitios web, lo cierto es que, el objetivo de este proyecto es aprender a utilizar ReactJS, por lo que, preferí enfocarme en el temario del mismo y en la maquetación de la aplicación.

## Navagación y Componentes

A fin de navegar adecuadamente a través del sitio he implementado el router de la librería react-router-dom

- La navegacion de la "Tienda Virtual" la determina el componente Link. 
- La ruta "/" nos lleva al componente ItemListContainer mostrando todos los productos. Es el Home del sitio.
- La ruta "/categoria/:categoria" también nos dirige al componente "ItemListContainer" pero filtrando los productos por categoria.. En el caso de este proyecto las categorias son dos: 1 y 2.
- La ruta "/item/:id" nos lleva al componente ItemDetailContainer.
- La ruta "/cart" nos direcciona al componente Cart, en referencia al "carrito de compras", el cual, puede estar vacío o bien, tener productos agregados.

El home contiene un componente **"Header"** que contiene otro componente denominado **"NavBar"**. Éste último componente, además del menú de navegación que tiene un estilo simple (Solo tiene un botón de inicio, y dos botones más: categoria 1 y 2), contiene el componente **"CartWidget"** que retorna un ícono de un carrito obtenido de la libreria de íconos de Bootstrap. Además, cuando hay productos en el componente Cart, el ícono de el componente mencionado, muestra su cantidad en el NavBar.

El componente **"ItemListConteiner"** retorna el componente **"ItemList"** y muestra doce (12) productos. Ahora, el si se hace click en en los botones "categoria 1" o "categoría 2" que se encuentran dentro del componente **"NavBar"**, se redirigirá al mismo componente, pero esta vez, los productos estarán filtrados: seis (6) productos pertenecen a la categoría 1 y seis (6) productos a la categoría 2.

Es importante mencionar que el primer componente mencionado en el párrafo anterior contiene la llamada a firebase con una estructura condicional, devolviendo todos los productos o bien, filtrandolos por categoria.

Además, el componente **"Item"** recibirá por props los datos de los productos para mostrarlos en pantalla.

Por su parte, el componente **"ItemDetail"** recibe también por props los datos del producto a través del componente **"ItemDetailConteiner"**, con el objetivo que, el usuario, una vez que haga click en el componente **"Link"** que se encuentra dentro del componente **"Item"** puede acceder a los detalles del producto. Además, el componente **"ItemCount"** se encuentra dentro del componente **ItemDetail** a fin que el usuario pueda agregar o quitar más productos al carrito

El componente **Cart** contiene el listado de productos seleccionados, la imagen de cada producto, la cantidad de productos elegidos por el usuario, la suma del precio de las unidades y la suma total de todos los productos, un boton para confirmar la compra que nos lleva a el componente **Form**.

El componente **Form** es un formulario para confirmar la compra, nos pide los datos de contacto del usuario, tiene un boton para confirmar. Al hacer click en el mismo se guardar dentro de firebase en la coleccion "ordenes" los datos del usuario, como también el id, título y precio del producto, el precio total de la compra y la fecha en que se realizo la misma. Asimismo, devuelve un mensaje al usuario en el que se muestra el id de la compra (es el id del primer producto adquirido) realizada dándole un descuento para su próxima compra.

También he creado un componente **"Footer"** para darle un estilo más amigable al sitio. Dicho componente no tiene ninguna funcionalidad. Lo mismo sucede con el componente **"Loading"**, el cual es un Spinner creado con estilos de Bootrasp a fin que, cuando los datos se están cargando desde firebase muestre un mensaje en pantalla.

# Contexts

Se creó una carpeta denominada "contexto", separada del resto de los componentes donde se utilizó "createContext" de react para poder definir un contexto.

En dicha carpeta se creó un componente llamado **"CustomProvider"**, el cual define una serié de funciones que luegos son importadas al componente Cart y Form a fin de poder agregar elementos al carrito, borrarlos, sumar el total, etc.

# Instrucciones de instalación

- git clone https://github.com/EstebanPereyra/virtualcomerce

- npm install

- npm start

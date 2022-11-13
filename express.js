const express = require ('express')
const Contenedor = require('./classContenedor');

const app = express ()
const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})

server.on ('error', err => {
    console.log(`Error en servidor ${err}`)
})

const productos = new Contenedor('productos.txt');

app.get('/productos', (req, res) => {
	const mostrarProductos =  productos.getAll();
	return res.send(mostrarProductos)  ;
});

app.get('/productorandom',  (req, res) => {
   
    const mostrarRandom =  productos.numeroRandom();
	return res.send(mostrarRandom)  ;

});

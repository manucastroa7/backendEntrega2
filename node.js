const Contenedor = require('./Contenedor.js')

const express = require('express')

const app = express()

const PORT = 8080

const contenedor = new Contenedor("productos.txt");

app.get('/productos', async (req, res) => {

    const allProductos = await contenedor.getAll();

    res.send(allProductos)

})


app.get('/productoRandom', async (req, res) => {
  const allProducts = await contenedor.getAll();
  const prodRandom = Math.floor(Math.random() * allProducts.length);
    res.send(allProducts[prodRandom])

})



const server = app.listen(PORT, () => {

    console.log(`Servidor http escuchando el puerto ${server.address().port}`)


})

server.on("error", error => console.log(`Error en servidor ${error}`))
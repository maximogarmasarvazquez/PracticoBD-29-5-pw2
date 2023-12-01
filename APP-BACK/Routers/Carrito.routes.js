const Rutas = require('express').Router();
const CarritoController = require('../Controllers/Carrito.Controller');

//Retornar todos los clientes
Rutas.get('/lista', CarritoController.lista);

//Retprmar clientes segun filtro
Rutas.get('/filtrar/:campo/:valor', CarritoController.filtrar);

//actualizar un cliente 
Rutas.put('/actualizar/:id', CarritoController.actualizar);

//Nuevo cliente
Rutas.post('/nuevo', CarritoController.nuevo);

//Eliminar Cliente
Rutas.delete('/eliminar/:id', CarritoController.eliminar);

module.exports = Rutas;
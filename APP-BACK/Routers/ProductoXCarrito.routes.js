const Rutas = require('express').Router();
const ProductoXCarritoController = require('../Controllers/ProductoXCarrito.controller');

//Retornar todos los clientes
Rutas.get('/lista', ProductoXCarritoController.lista);

//Retprmar clientes segun filtro
Rutas.get('/filtrar/:campo/:valor', ProductoXCarritoController.filtrar);

//actualizar un cliente 
Rutas.put('/actualizar/:id', ProductoXCarritoController.actualizar);

//Nuevo cliente
Rutas.post('/nuevo', ProductoXCarritoController.nuevo);

//Eliminar Cliente
Rutas.delete('/eliminar/:id', ProductoXCarritoController.eliminar);

module.exports = Rutas;
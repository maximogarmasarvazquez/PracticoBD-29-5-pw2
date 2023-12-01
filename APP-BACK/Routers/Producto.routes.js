const Rutas = require('express').Router();
const ProductoController = require('../Controllers/Producto.controller');

//Retornar todos los clientes
Rutas.get('/lista', ProductoController.lista);

//Retprmar clientes segun filtro
Rutas.get('/filtrar/:campo/:valor', ProductoController.filtrar);

//actualizar un cliente 
Rutas.put('/actualizar/:id', ProductoController.actualizar);

//Nuevo cliente
Rutas.post('/nuevo', ProductoController.nuevo);

//Eliminar Cliente
Rutas.delete('/eliminar/:id', ProductoController.eliminar);

module.exports = Rutas;
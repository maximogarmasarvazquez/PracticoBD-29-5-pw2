const Rutas = require('express').Router();
const ProductoXVentaController = require('../Controllers/ProductoXVenta.controller');

//Retornar todos los clientes
Rutas.get('/lista', ProductoXVentaController.lista);

//Retprmar clientes segun filtro
Rutas.get('/filtrar/:campo/:valor', ProductoXVentaController.filtrar);

//actualizar un cliente 
Rutas.put('/actualizar/:id', ProductoXVentaController.actualizar);

//Nuevo cliente
Rutas.post('/nuevo', ProductoXVentaController.nuevo);

//Eliminar Cliente
Rutas.delete('/eliminar/:id', ProductoXVentaController.eliminar);

module.exports = Rutas;
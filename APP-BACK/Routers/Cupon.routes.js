const Rutas = require('express').Router();
const CuponController = require('../Controllers/Cupon.controller');

//Retornar todos los clientes
Rutas.get('/lista', CuponController.lista);

//Retprmar clientes segun filtro
Rutas.get('/filtrar/:campo/:valor', CuponController.filtrar);

Rutas.get('/validar/:codigo', CuponController.validar);

Rutas.put('/usar/:codigo', CuponController.usar);

//actualizar un cliente 
Rutas.put('/actualizar/:id', CuponController.actualizar);

//Nuevo cliente
Rutas.post('/nuevo', CuponController.nuevo);

//Eliminar Cliente
Rutas.delete('/eliminar/:id', CuponController.eliminar);

module.exports = Rutas;
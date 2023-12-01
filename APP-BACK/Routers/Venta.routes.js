const Rutas = require('express').Router();
const VentaController = require('../Controllers/Venta.controller');

//Retornar todos los clientes
Rutas.get('/lista', VentaController.lista);

//Retprmar clientes segun filtro
Rutas.get('/filtrar/:campo/:valor', VentaController.filtrar);

//actualizar un cliente 
Rutas.put('/actualizar/:id', VentaController.actualizar);

//Nuevo cliente
Rutas.post('/nuevo', VentaController.nuevo);

//Eliminar Cliente
Rutas.delete('/eliminar/:id', VentaController.eliminar);

module.exports = Rutas;
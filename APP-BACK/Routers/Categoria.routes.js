const Rutas = require('express').Router();
const CategoriaController = require('../Controllers/Categoria.controller');

//Retornar todos los clientes
Rutas.get('/lista', CategoriaController.lista);

//Retprmar clientes segun filtro
Rutas.get('/filtrar/:campo/:valor', CategoriaController.filtrar);

//actualizar un cliente 
Rutas.put('/actualizar/:id', CategoriaController.actualizar);

//Nuevo cliente
Rutas.post('/nuevo', CategoriaController.nuevo);

//Eliminar Cliente
Rutas.delete('/eliminar/:id', CategoriaController.eliminar);

module.exports = Rutas;
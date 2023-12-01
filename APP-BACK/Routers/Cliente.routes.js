const Rutas =  require('express').Router();
const ClienteController = require('../Controllers/Cliente.controller');
const Auth = require('../middleware/auth');

// Retornar todos los clientes
Rutas.get('/lista', Auth, ClienteController.lista);

// Retornar clentes segun filtro
Rutas.get('/filtrar/:campo/:valor', Auth, ClienteController.filtrar);

// Nuevo CLiente
Rutas.post('/nuevo', ClienteController.nuevo);
Rutas.post('/login', ClienteController.login);

// Actualizar un cliente
Rutas.put('/actualizar/:id', Auth, ClienteController.actualizar);

// Eliminar Cliente
Rutas.delete('/eliminar/:id', Auth, ClienteController.eliminar);



/*
//ejemplo
// http://localhost:3500/clientes/filtrar/email/pepe@

// Actualizar un cliente
Rutas.put('/actualizar/:id',(req,res)=>{});

// Eliminar Cliente
Rutas.delete('/eliminar/:id',(req,res)=>{});
*/

module.exports = Rutas;
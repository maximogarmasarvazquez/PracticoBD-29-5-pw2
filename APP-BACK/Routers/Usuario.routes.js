const Rutas =  require('express').Router();
const UsuarioController = require('../Controllers/Usuario.controller');
const Auth = require('../middleware/auth');

// Retornar todos los clientes
Rutas.get('/lista', Auth, UsuarioController.lista);

// Retornar clentes segun filtro
Rutas.get('/filtrar/:campo/:valor', Auth, UsuarioController.filtrar);

// Nuevo CLiente
Rutas.post('/nuevo', UsuarioController.nuevo);
Rutas.post('/login', UsuarioController.login);

// Actualizar un cliente
Rutas.put('/actualizar/:id', Auth, UsuarioController.actualizar);

// Eliminar Cliente
Rutas.delete('/eliminar/:id', Auth, UsuarioController.eliminar);



/*
//ejemplo
// http://localhost:3500/clientes/filtrar/email/pepe@

// Actualizar un cliente
Rutas.put('/actualizar/:id',(req,res)=>{});

// Eliminar Cliente
Rutas.delete('/eliminar/:id',(req,res)=>{});
*/

module.exports = Rutas;
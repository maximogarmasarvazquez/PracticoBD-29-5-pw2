const db = require('../Models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Model } = require('sequelize');

exports.lista = (req,res) =>{
    console.log('Procesamiento de lista');
    // buscar la lista de clientes
    db.Usuario.findAll()
        .then( registros => {
            res.status(200).send(registros);
        })
        .catch(error =>{
            res.status(500).send(error);
        });
};

exports.filtrar = (req,res) =>{
    console.log('Procesamiento de lista filtrada');
    const campo = req.params.campo;
    const valor = req.params.valor;
    console.log(`campo: ${campo} valor:${valor}`)
    // buscar la lista de clientes
    db.Usuario.findAll({where: {[campo]:valor}})
        .then( registros => {
            res.status(200).send(registros);
        })
        .catch(error =>{
            res.status(500).send(error);
        });
};

exports.nuevo = async (req,res) => {
    console.log('***********************************************');
    console.log('***********************************************');
    console.log('***********************************************');
    console.log(req.body.nombre);
    console.log('***********************************************');
    console.log('***********************************************');
    console.log('***********************************************');
    const passwordcrypted = await bcrypt.hash(req.body.password, 10);
    const dataNuevoUsuario ={
        nombre: req.body.nombre,
        email: req.body.email,
        dni: req.body.dni,
        password: passwordcrypted
    };
        // buscar la lista de clientes
        db.Usuario.create(dataNuevoUsuario)
        .then( registro => {
            res.status(201).send(
                {   resultado:true,
                    data: registro
                }
                );
        })
        .catch(error =>{
            res.status(500).send(
                {   resultado:false,
                    msg: error
                }
            );
        });
};

exports.actualizar = (req,res) => {
    const id = req.params.id;

    console.log('***********************************************');
    console.log(req.body.nombre);
    console.log('***********************************************');

    const dataUsuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        dni: req.body.dni
    };
    db.Usuario.update(dataUsuario,{
        where: {id:id}
    })
    .then( num => {
        if(num > 0){
            res.status(201).send(
                {   resultado:true,
                    data: registro
                }
                );
        }else{
            res.status(500).send(
                {   resultado:false,
                    msg: 'No se pudo actualizar el registro',
                    body:{
                        data: dataUsuario,
                        id:id
                    }
                }
            );
        }
    })
    .catch(error =>{
        res.status(501).send(
            {   resultado:false,
                msg: error
            }
        );
    });
};

exports.eliminar = (req,res) => {
    const id = req.params.id;
    db.Usuario.destroy({
        where: {id:id}
    })
    .then( num => {
        if(num > 0){
            res.status(201).send(
                {   resultado:true,
                    data: registro
                }
                );
        }else{
            res.status(500).send(
                {   resultado:false,
                    msg: 'No se pudo eliminar el registro',
                    body:{
                        data: dataUsuario,
                        id:id
                    }
                }
            );
        }
    })
    .catch(error =>{
        res.status(501).send(
            {   resultado:false,
                msg: error
            }
        );
    });
};

exports.login = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log('***********************************************');
    console.log(req.body.email);
    console.log('***********************************************');

    const usuario = await db.Usuario.findOne(  {where:{email:email},
        include: [{
            model: db.Rol
        }]});
        console.log('rol-----------------------------',usuario.Rol)
    if(usuario){

        const passwordValido = await bcrypt.compare(password, usuario.password);
        console.log(passwordValido);
        if(passwordValido){
            const tokenCrypted = jwt.sign({
                email: usuario.email,
                usuarioId: usuario.id,
                nombre: usuario.nombre,
                dni: usuario.dni,
            },'Millave123456$',{expiresIn: '24h'}
            )
            res.status(200).send(
                {   resultado:true,
                    nombre: usuario.nombre,
                    msg: 'Login exitoso',
                    token: tokenCrypted,
                    sigla: usuario.Rol.sigla,
                },
                );
        }else{
            res.status(500).send(
                {   resultado:false,
                    msg: 'Password incorrecto'
                }
            );
        }
    }else{
        res.status(500).send(
            {   resultado:false,
                msg: 'No se encontro el usuario'
            }
        );
    }
}
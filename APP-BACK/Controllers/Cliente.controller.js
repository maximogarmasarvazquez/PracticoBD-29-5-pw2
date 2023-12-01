const db = require('../Models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.lista = (req,res) =>{
    console.log('Procesamiento de lista');
    // buscar la lista de clientes
    db.Cliente.findAll()
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
    db.Cliente.findAll({where: {[campo]:valor}})
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
    console.log(req.body.nombreCompleto);
    console.log('***********************************************');
    console.log('***********************************************');
    console.log('***********************************************');
    const passwordcrypted = await bcrypt.hash(req.body.password, 10);
    const dataNuevoCliente = {
        nombreCompleto: req.body.nombreCompleto,
        email: req.body.email,
        direccion: req.body.direccion,
        dni: req.body.dni,
        password: passwordcrypted
    };
        // buscar la lista de clientes
        db.Cliente.create(dataNuevoCliente)
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
    console.log(req.body.nombreCompleto);
    console.log('***********************************************');

    const dataCliente = {
        nombreCompleto: req.body.nombreCompleto,
        direccion: req.body.direccion,
        email: req.body.email,
        dni: req.body.dni
    };
    db.Cliente.update(dataCliente,{
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
                        data: dataCliente,
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
    db.Cliente.destroy({
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
                        data: dataCliente,
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
    const cliente = await db.Cliente.findOne({where: {email:email}});
    console.log(password);

    if(cliente){
        const passwordValido = await bcrypt.compare(password, cliente.password);

        console.log(passwordValido, cliente.password);
        if(passwordValido){
            const tokenCrypted = jwt.sign({
                email: cliente.email,
                direccion: cliente.direccion,
                clienteId: cliente.id,
                nombreCompleto: cliente.nombre,
                dni: cliente.dni,
            },'Millave123456$',{expiresIn: '24h'}
            )
            res.status(200).send(
                {   resultado:true,
                    nombre: cliente.nombreCompleto,
                    msg: 'Login exitoso',
                    token: tokenCrypted
                }
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
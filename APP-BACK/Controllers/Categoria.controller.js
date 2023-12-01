const db = require('../Models');

exports.lista = (req, res) => {
    console.log('procesamiento de lista');
    const { page = 0, size = 5 } = req.query;

    let options = {
        limit: +size,
        offset: (+page) * (+size)
    };

    db.Categoria.findAndCountAll(options)
        .then(({ count, rows }) => {
            res.status(200).send({
                registros: rows,
                total: count
            });
        })
        .catch(error => {
            res.status(500).send(error);
        });
};

exports.nuevo = (req, res ) => {

    const dataNuevoCategoria = {
        nombre: req.body.nombre,
    };
    //crear nuevo cliente
    db.Categoria.create( dataNuevoCategoria)
       .then( registros => {
        res.status(201).send( registros );
       }).catch(error => {
        res.status(500).send( error );
       });
};

exports.eliminar = (req, res ) => {

    const id = req.params.id;

    db.Categoria.destroy( { where: { id: id } } ).
    then( num => {
        if(num > 0){

            res.status(201).send( 
                {   resultado: true, 
                } 
                );

        }else{
            res.status(500).send( 
                {   resultado: false, 
                    msg: 'registro no actualizado',
                    body: {
                        id: id
                    }
                } 
                );
        }
    })
    .catch( error => {
        res.status(501).send( 
            {
                resultado: false,
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

    const dataCategoria = {
        nombre: req.body.nombre
    }
    db.Categoria.update(dataCategoria,{
        where: {id:id}
    })
    .then( num => {
        if(num > 0){
            res.status(201).send(
                {   resultado:true    
                }
                );
        }else{
            res.status(500).send(
                {   resultado:false,
                    msg: 'No se pudo actualizar el registro',
                    body:{
                        data: dataCategoria,
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

exports.filtrar = (req, res ) => {
    
        const campo = req.params.campo;
        const valor = req.params.valor;

    db.Categoria.findAll( { where: { [campo]: valor } } )
       .then( registros => {

        res.status(200).send( registros );
        
       }).catch(error => {

        res.status(500).send( error );

       });
};
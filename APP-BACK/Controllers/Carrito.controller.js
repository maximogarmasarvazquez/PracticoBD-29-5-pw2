const db = require('../Models');

exports.lista = (req, res ) => {
    console.log('procesamiento de lista');

    //buscar la lista de clientes
    db.Carrito.findAll()
       .then( registros => {

        res.status(200).send( registros );
        
       }).catch(error => {

        res.status(500).send( error );

       });
};

exports.nuevo = (req, res ) => {

    const dataNuevoCarrito = {
        confirmado: req.body.confirmado,
        numCarrito: req.body.numCarrito
    };
    //crear nuevo cliente
    db.Carrito.create( dataNuevoCarrito)
       .then( registros => {
        res.status(201).send( registros );
       }).catch(error => {
        res.status(500).send( error );
       });
};

exports.eliminar = (req, res ) => {

    const id = req.params.id;

    db.Carrito.destroy( { where: { id: id } } ).
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

    const dataCarrito = {
        confirmado: req.body.confirmado,
        numCarrito: req.body.numCarrito
    }
    db.Carrito.update(dataCarrito,{
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
                        data: dataNuevoCarrito,
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

    db.Carrito.findAll( { where: { [campo]: valor } } )
       .then( registros => {

        res.status(200).send( registros );
        
       }).catch(error => {

        res.status(500).send( error );

       });
};
const db = require('../Models');

exports.lista = (req, res ) => {
    console.log('procesamiento de lista');

    //buscar la lista de clientes
    db.ProductoXCarrito.findAll()
       .then( registros => {

        res.status(200).send( registros );
        
       }).catch(error => {

        res.status(500).send( error );

       });
};

exports.nuevo = (req, res ) => {

    const dataNuevoProductoXCarrito = {
        cantidad: req.body.cantidad,
        precioUnit:req.body.precioUnit
    };
    //crear nuevo cliente
    db.ProductoXCarrito.create( dataNuevoProductoXCarrito)
       .then( registros => {
        res.status(201).send( registros );
       }).catch(error => {
        res.status(500).send( error );
       });
};

exports.eliminar = (req, res ) => {

    const id = req.params.id;

    db.ProductoXCarrito.destroy( { where: { id: id } } ).
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

    const dataProductoXCarrito = {
        cantidad: req.body.cantidad,
        precioUnit:req.body.precioUnit
    };
    db.ProductoXCarrito.update(dataProductoXCarrito,{
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
                        data: dataNuevoProductoXCarrito,
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

    db.ProductoXCarrito.findAll( { where: { [campo]: valor } } )
       .then( registros => {

        res.status(200).send( registros );
        
       }).catch(error => {

        res.status(500).send( error );

       });
};
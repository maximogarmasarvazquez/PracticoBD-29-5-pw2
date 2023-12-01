const db = require('../Models');

exports.lista = (req, res ) => {
    console.log('procesamiento de lista');

    //buscar la lista de clientes
    db.Venta.findAll()
       .then( registros => {

        res.status(200).send( registros );
        
       }).catch(error => {

        res.status(500).send( error );

       });
};

exports.nuevo = (req, res ) => {

    const dataNuevaVenta = {
        nombreCliente: req.body.nombreCliente,
        total:req.body.total,
        tarjeta:req.body.tarjeta,
        dniCliente:req.body.dniCliente
    };
    //crear nuevo cliente
    db.Venta.create( dataNuevaVenta)
       .then( registros => {
        res.status(201).send( registros );
       }).catch(error => {
        res.status(500).send( error );
       });
};

exports.eliminar = (req, res ) => {

    const id = req.params.id;

    db.Venta.destroy( { where: { id: id } } ).
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

    
    const dataVenta = {
        nombreCliente: req.body.nombreCliente,
        total:req.body.total,
        tarjeta:req.body.tarjeta,
        dniCliente:req.body.dniCliente
    };
    db.Venta.update(dataVenta,{
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
                        data: dataNuevaVenta,
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

    db.Venta.findAll( { where: { [campo]: valor } } )
       .then( registros => {

        res.status(200).send( registros );
        
       }).catch(error => {

        res.status(500).send( error );

       });
};
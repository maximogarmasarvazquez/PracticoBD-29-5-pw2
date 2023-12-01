const db = require('../Models');

exports.lista = (req, res ) => {
    console.log('procesamiento de lista');
    const { page = 0, size = 5 } = req.query;

    let options = {
        limit: +size,
        offset: (+page) * (+size)
    };

    //buscar la lista de clientes
    db.Producto.findAndCountAll(options)
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

    const dataNuevoProducto = {
        nombre: req.body.nombre,
        precio:req.body.precio,
        destacado:req.body.destacado,
        imagen:req.body.imagen
    };
    //crear nuevo cliente
    db.Producto.create( dataNuevoProducto)
       .then( registros => {
        res.status(201).send( registros );
       }).catch(error => {
        res.status(500).send( error );
       });
};

exports.eliminar = (req, res ) => {

    const id = req.params.id;

    db.Producto.destroy( { where: { id: id } } ).
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

exports.actualizar = (req, res) => {
    const id = req.params.id;

    console.log('***********************************************');
    console.log(req.body.nombre);
    console.log('***********************************************');

    const dataProducto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        destacado: req.body.destacado,
        imagen: req.body.imagen
    };
    db.Producto.update(dataProducto, {
        where: { id: id }
    })
        .then(num => {
            if (num > 0) {
                res.status(201).send(
                    { resultado: true }
                );
            } else {
                res.status(500).send(
                    {
                        resultado: false,
                        msg: 'No se pudo actualizar el registro',
                        body: {
                            data: dataProducto,
                            id: id
                        }
                    }
                );
            }
        })
        .catch(error => {
            res.status(501).send(
                {
                    resultado: false,
                    msg: error
                }
            );
        });
};


exports.filtrar = (req, res ) => {
    
    const campo = req.params.campo;
    const valor = req.params.valor;

db.Producto.findAll( { where: { [campo]: valor } } )
   .then( registros => {

    res.status(200).send( registros );
    
   }).catch(error => {

    res.status(500).send( error );

   });
};
const db = require('../Models');

exports.lista = (req, res ) => {
    console.log('procesamiento de lista');

    //buscar la lista de clientes
    db.Cupon.findAll()
       .then( registros => {

        res.status(200).send( registros );
        
       }).catch(error => {

        res.status(500).send( error );

       });
};

exports.nuevo = (req, res ) => {

    const dataNuevoCupon = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        fechaDeVencimiento: req.body.fechaDeVencimiento,
        usosMax: req.body.usosMax,
        vecesUtilizado: req.body.vecesUtilizado,
    };
    //crear nuevo cliente
    db.Cupon.create( dataNuevoCupon)
       .then( registros => {
        res.status(201).send( registros );
       }).catch(error => {
        res.status(500).send( error );
       });
};

exports.eliminar = (req, res ) => {

    const id = req.params.id;

    db.Cupon.destroy( { where: { id: id } } ).
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

    const dataCupon = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        fechaDeVencimiento: req.body.fechaDeVencimiento,
        usosMax: req.body.usosMax,
        vecesUtilizado: req.body.vecesUtilizado,
    }
    db.Cupon.update(dataCupon,{
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
                        data: dataNuevoCupon,
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

    db.Cupon.findAll( { where: { [campo]: valor } } )
       .then( registros => {

        res.status(200).send( registros );
        
       }).catch(error => {

        res.status(500).send( error );

       });
};

//validar
exports.validar = async (req, res) => {

    const code = req.params.codigo;

const cupon = await db.Cupon.findOne({ where: { codigo: code } } ) 
if(cupon.fechaDeVencimiento < Date.now() && cupon.vecesUtilizado < cupon.usosMax ){

    res.status(200).send(
        {  codigo: cupon.codigo,
            valido: true,
        }
    );
 }else{
    res.status(200).send(//vencido
        {  codigo: cupon.codigo,
            valido: false,
        }
    );
 }
};

//usar
exports.usar = async (req, res) => {

    const code= req.params.codigo;
 
    const Cupon = await db.Cupon.findOne({ where: { codigo: code } } ) 

    if(Cupon.fechaDeVencimiento < Date.now() && Cupon.vecesUtilizado < Cupon.usosMax ){

   const a = await db.Cupon.update({vecesUtilizado: Cupon.vecesUtilizado + 1},{
        where: { codigo: code }
    })
    res.status(200).send(
        {  vecesUtilizado: Cupon.vecesUtilizado + 1,
            valido: true,
        }
    );
    }else{
        res.status(500).send(//vencido
            {  resultado: 'no se pudo usar',
                valido: false,
            }
        );
     }
};

const { Sequelize } = require('sequelize');//se llama a la libreria de sequelize

//Cargar la configuracion
const dbConfig = require('../Config/db.config.js')


const sequelize = new Sequelize( //se crea una insatancia de Sequelize como un contructor y se pasan los datos de la base de datos 
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        port: dbConfig.port,
    }
);

const db = {};

//el objeto Sequelize esta disponible y accesible en otras partes del código a través del objeto db. 
db.Sequelize = Sequelize;

//Esto permite acceder a la instancia de Sequelize y utilizarla en otras partes del código.
// lo que facilita la realización de consultas y operaciones en la base de datos.
db.sequelize = sequelize;

//cargar modelos 
db.Cliente = require('./Cliente.model')(sequelize);
db.Usuario = require('./Usuario.model')(sequelize);
db.Producto = require('./Producto.model.js')(sequelize);
db.Venta = require('./Venta.model.js')(sequelize);
db.Categoria = require('./Categoria.model.js')(sequelize);
db.Carrito = require('./Carrito.model.js')(sequelize);
db.ProductoXCarrito = require('./ProductoXCarrito.model.js')(sequelize);
db.ProductoXVenta= require('./ProductoXVenta.model.js')(sequelize);
db.Cupon = require('./Cupon.model.js')(sequelize);
db.Rol = require('./Rol.model.js')(sequelize);
//Relacion
//Muchos Productos pueden estar en una categoria
 db.Categoria.hasMany(db.Producto);
//Una categoria puede tener muchos productos
 db.Producto.belongsTo(db.Categoria);

 db.Producto.hasMany(db.ProductoXCarrito);
 db.ProductoXCarrito.belongsTo(db.Producto);

 db.Carrito.hasMany(db.ProductoXCarrito);
 db.ProductoXCarrito.belongsTo(db.Carrito);

 db.Producto.hasMany(db.ProductoXVenta);
 db.ProductoXVenta.belongsTo(db.Producto);

 db.Venta.hasMany(db.ProductoXVenta);
 db.ProductoXVenta.belongsTo(db.Venta);

 db.Usuario.hasMany(db.Venta);
 db.Venta.belongsTo(db.Usuario);

 db.Cliente.hasMany(db.Venta);
 db.Venta.belongsTo(db.Cliente);

db.Rol.hasMany(db.Usuario);
 db.Usuario.belongsTo(db.Rol);

module.exports = db;
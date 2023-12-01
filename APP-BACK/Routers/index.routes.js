const { Cliente } = require('../Models');

module.exports = (app) => {
    
    const auth = require('../middleware/auth');

    const ClienteRoutes = require('./Cliente.routes');
    app.use('/cliente', ClienteRoutes);

    const UsuarioRoutes = require('./Usuario.routes');
    app.use('/usuario', UsuarioRoutes);
    
    const ProductoRoutes = require('./Producto.routes');
    app.use('/Producto',  ProductoRoutes);

    const VentaRoutes = require('./Venta.routes');
    app.use('/Venta',  VentaRoutes);

    const CategoriaRoutes = require('./Categoria.routes');
    app.use('/Categoria',  CategoriaRoutes);

    const CarritoRoutes = require('./Carrito.routes');
    app.use('/Carrito', CarritoRoutes);

    const ProductoXCarritoRoutes = require('./ProductoXCarrito.routes');
    app.use('/ProductoXCarrito', ProductoXCarritoRoutes);

    const ProductoXVentaRoutes = require('./ProductoXVenta.routes');
    app.use('/ProductoXVenta',  ProductoXVentaRoutes);

    const CuponRoutes = require('./Cupon.routes');
    app.use('/Cupon', CuponRoutes);

}
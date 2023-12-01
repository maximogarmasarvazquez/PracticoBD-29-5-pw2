const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ProductoXVenta = sequelize.define('ProductoXVenta',
    {

        //id auto ,no se completa
      cantidadProductos: {
        type: DataTypes.INTEGER(60),
        allowNull: true,
      },
      precioUnitario: {
        type: DataTypes.FLOAT(50),
        allowNull: true,
    }
    },{
    });

    return ProductoXVenta;
}
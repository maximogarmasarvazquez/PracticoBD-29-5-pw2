const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ProductoXCarrito = sequelize.define('ProductoXCarrito',
    {

        //id auto ,no se completa
      cantidad: {
        type: DataTypes.INTEGER(60),
        allowNull: true,
      },
      precioUnit: {
        type: DataTypes.FLOAT(50),
        allowNull: true,
      }

    },{
        
    });

    return ProductoXCarrito;
}
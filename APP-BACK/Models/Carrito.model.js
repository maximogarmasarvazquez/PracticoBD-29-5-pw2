const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Carrito = sequelize.define('Carrito',
    {

        //id auto ,no se completa
      confirmado: {
        type: DataTypes.BOOLEAN(),
        allowNull: true,
    }, numCarrito: {
        type: DataTypes.INTEGER(50),
        allowNull: true,
    } 
    });

    return Carrito;
}
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Venta = sequelize.define('Venta',
    {

        //id auto ,no se completa
      nombreCliente: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      total: {
        type: DataTypes.FLOAT(50),
        allowNull: true,
      },
      tarjeta: {
        type: DataTypes.INTEGER(20),
        allowNull: true,
      },
      dniCliente: {
        type: DataTypes.INTEGER(20),
        allowNull: true,
      },

    },{
        
    });

    return Venta;
}
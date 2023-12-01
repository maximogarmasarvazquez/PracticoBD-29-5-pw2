const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Producto = sequelize.define('Producto',
    {

        //id auto ,no se completa
      nombre: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      precio: {
        type: DataTypes.FLOAT(50),
        allowNull: false,
      },
      destacado: {
        type: DataTypes.BOOLEAN(),
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },

    },{
        
    });

    return Producto;
}
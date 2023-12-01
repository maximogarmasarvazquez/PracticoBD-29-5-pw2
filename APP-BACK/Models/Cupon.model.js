const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Cupon = sequelize.define('Cupon',
    {

        //id auto ,no se completaun 
      nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      codigo: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      fechaDeVencimiento: {
        type: DataTypes.DATE(),
        allowNull: false,
      },
      usosMax: {
        type: DataTypes.INTEGER(100),
        allowNull: false,
      },
      vecesUtilizado: {
        type: DataTypes.INTEGER(100),
        allowNull: false,
      },
     

    },{
        
    });

    return Cupon;
}
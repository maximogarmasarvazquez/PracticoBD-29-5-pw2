const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Rol = sequelize.define('Rol',
    {

        //id auto ,no se completa
      nombre: {
        type: DataTypes.STRING(0),
        allowNull: false,
      },
      sigla: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    
    },{
        
    });

    return Rol;
}
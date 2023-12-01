const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Categoria = sequelize.define('Categoria',
    {

        //id auto ,no se completa
      nombre: {
        type: DataTypes.STRING(40),
        allowNull: true,
    }}
    );
    return Categoria;
}
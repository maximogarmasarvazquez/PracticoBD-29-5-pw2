const { DataTypes } = require ('sequelize');

module.exports = (sequelize) =>{
    const Usuario = sequelize.define('Usuario',
    {
        // id automatico, no se completa
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        dni: {
            type: DataTypes.STRING(8),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(80),
            allowNull: true,
        },
    },
    {
        tableName: 'usuarios',
    })
    return Usuario;
}
const { DataTypes } = require ('sequelize');

module.exports = (sequelize) =>{
    const Cliente = sequelize.define('Cliente',
    {
        // id automatico, no se completa
        nombreCompleto: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        direccion: {
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
        tableName: 'cliente',
    })
    return Cliente;
}
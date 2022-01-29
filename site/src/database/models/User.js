module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true
        },
        pass: {
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        rol: {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(200)
        }
    }, {
        tablename: 'users',
        timestamps: false
    })
    return User
}
module.exports = (sequelize, DataTypes) => {
    const Color = sequelize.define('Color', {
        id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 'colors',
        timestamps: false
    })

    Color.associate = models => {
        Color.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'color_id'
        })
    }

    return Color;
}
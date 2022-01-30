module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define('Size', {
        id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tablename: 'sizes',
        timestamps: false
    })

    Size.associate = models => {
        Size.hasMany(models.Order_item, {
            as: 'order_items',
            foreignKey: 'size_id'
        })
    }

    return Size;
}
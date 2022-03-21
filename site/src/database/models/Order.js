module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(150),
            allowNull: false
        }
    }, {
        tableName: 'orders',
        timestamps: false
    })

    Order.associate = models => {
        Order.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'user_id'
        })
        Order.hasMany(models.Order_item, {
            as: 'order_items',
            foreignKey: 'order_id'
        })
    }

    return Order;
}
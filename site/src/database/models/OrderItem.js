module.exports = (sequelize, DataTypes) => {
    const Order_items = sequelize.define('Order_item', {
        id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        },
        size_id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        },
        order_id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        }
    }, {
        tablename: 'order_items',
        timestamps: false
    })

    Order_items.associate = models => {
        Order_items.belongsTo(models.Order, {
            as: 'order',
            foreignKey: 'order_id'
        })
        Order_items.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'product_id'
        })
        Order_items.belongsTo(models.Size, {
            as: 'size',
            foreignKey: 'size_id'
        })
    }

    return Order_items;
}
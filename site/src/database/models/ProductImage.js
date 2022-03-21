module.exports = (sequelize, DataTypes) => {
    const Products_images = sequelize.define('Products_image', {
        id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        }
    }, {
        tableName: 'products_images',
        timestamps: false
    })

    Products_images.associate = models => {
        Products_images.belongsTo(models.Product), {
            as: 'product',
            foreignKey: 'productId'
        }
    }

    return Products_images;
}
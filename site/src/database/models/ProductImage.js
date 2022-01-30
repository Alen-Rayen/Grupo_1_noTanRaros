module.exports = (sequelize, DataTypes) => {
    const ProductImage = sequelize.define('ProductImage', {
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
        product_id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        }
    }, {
        tablename: 'productimages',
        timestamps: false
    })

    ProductImage.associate = models => {
        ProductImage.belongsTo(models.Product), {
            as: 'product',
            foreignKey: 'product_id'
        }
    }

    return ProductImage;
}
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER(12),
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(850),
            allowNull: true
        },
        color_id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        },
        brand_id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        },
        subcategory_id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT
        }
    }, {
        tablename: 'products',
        timestamps: false
    })
    return Product;
}
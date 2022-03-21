module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define('Brand', {
        id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(200),
            allowNull: true
        }
    }, {
        tableName: 'brands',
        timestamps: false
    })

    Brand.associate = models => {
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'brand_id'
        })
    }

    return Brand;
}
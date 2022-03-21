module.exports = (sequelize, DataTypes) => {
    const Subcategory = sequelize.define('Subcategory' , {
        id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            allowNull: false
        }
    }, {
        tableName: 'subcategories',
        timestamps: false
    })

    Subcategory.associate = models => {
        Subcategory.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        })
        Subcategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "subcategory_id"
        })
    }

    return Subcategory;
}
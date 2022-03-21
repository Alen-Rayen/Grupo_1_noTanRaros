module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER(12).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    }, {
        tableName: 'categories',
        timestamps: false
    })

    Category.associate = models => {
        Category.hasMany(models.Subcategory, {
            as: 'subcategories',
            foreignKey: 'category_id'
        })
    }

    return Category;
}
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
    {
        //table will store a tag ID and a product ID which connects all relationships
        // tag_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // product_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "product_tag",
    },
);

module.exports = ProductTag;

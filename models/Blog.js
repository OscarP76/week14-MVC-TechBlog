const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   contents: {
     type: DataTypes.STRING,
     allowNull: false
   },
   dateCreated: {
     type: DataTypes.DATE,
     defaultValue: Date.now
   },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;

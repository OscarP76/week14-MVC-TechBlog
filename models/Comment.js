const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
   comment: {
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
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'blog',
          key: 'id'
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
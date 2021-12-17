const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');
// This file is already good to go! Just make sure you have the foreign key on the Project model!!

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id'
})

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment };

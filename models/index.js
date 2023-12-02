const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');
const Tag = require('./Tag');
const Destination = require('./Location');

User.hasMany(Blog, {
    foreignKey: 'user_id',
   
})
User.hasMany(Comment, {
    foreignKey: 'user_id',
    
})

Blog.belongsTo(User, {
    foreignKey: 'user_id'
}) 

Blog.hasMany(Comment, {
    foreignKey: 'post_id',
  
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Blog, {
    foreignKey: 'post_id'
})
Blog.belongsTo(Destination, {
    foreignKey: 'destination_id'
})

Tag.hasMany(Blog, {
    foreignKey: 'tag_id'
})

module.exports = { User, Blog, Comment, Tag, Destination };
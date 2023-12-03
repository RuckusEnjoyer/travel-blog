const Blog = require('./blog');
const User = require('./user');
const Comment = require('./comment');
const Tag = require('./tag');
const Destination = require('./destination');

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

// Tag.belongsToMany(Blog, {
//     foreignKey: 'tag_id'
// })

module.exports = { User, Blog, Comment, Tag, Destination };
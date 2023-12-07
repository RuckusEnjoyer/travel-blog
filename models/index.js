const Blog = require('./blog');
const User = require('./user');
const Comment = require('./comment');
const Favorite = require('./favs');
const Location = require('./Location');

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
    foreignKey: 'blog_id',
  
})

Comment.belongsTo(User)

Comment.belongsTo(Blog)

Blog.belongsTo(Location)

Location.hasMany(Blog, {
    foreignKey: 'location_id'

})



module.exports = { User, Blog, Comment, Location };
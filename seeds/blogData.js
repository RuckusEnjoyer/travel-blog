const {Blog} = require('../models');

const blogData = [
    {
        blog_title: 'Blog 1',
        blog_content: 'Content for blog 1',
        user_id: 1,
        destination_id: 1,
        tag_id: 1
    },
    {
        blog_title: 'Blog 2',
        blog_content: 'Content for blog 2',
        user_id: 2,
        destination_id: 2,
        tag_id: 2
    },
    {
        blog_title: 'Blog 3',
        blog_content: 'Content for blog 3',
        user_id: 3,
        destination_id: 3,
        tag_id: 3
    },
]
const seedBlog = () => Blog.bulkCreate(blogData);
module.exports = seedBlog; 
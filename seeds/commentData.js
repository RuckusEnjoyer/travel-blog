const {Comment} = require('../models');

const commentData = [
    {
        
        name: 1,
        comment_content: "This is a test comment.",
        blog_id: 1
    },
    {
        name: 2,
        comment_content: "This is a test comment.",
        blog_id: 2
    },
    {
        name: 3,
        comment_content: "This is a test comment.",
        blog_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
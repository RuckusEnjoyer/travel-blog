const {Comment} = require('../models');

const commentData = [
    {
        comment_content: "This is a test comment.",
        name: 1,
        blog_id: 1
    },
    {
        comment_content: "This is a test comment.",
        name: 2,
        blog_id: 2
    },
    {
        comment_content: "This is a test comment.",
        name: 3,
        blog_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
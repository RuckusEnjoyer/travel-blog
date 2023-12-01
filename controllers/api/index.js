const router = require('express').Router();
const users = require('./users');
const tags = require('./tags.js');
const comments = require('./comments.js');
const blogs = require('./blogs.js');

router.use('/blogs', blogs);
router.use('/comments', comments);
router.use('/tags', tags);
router.use('/users', users);
module.exports = router;

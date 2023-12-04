const router = require('express').Router();
const users = require('./usersRoute.js');
// const tags = require('./tagsRoute.js');
const comments = require('./commentsRoute.js');
const blogs = require('./blogsRoute.js');
const location = require('./locationRoute.js');

// router.use('/location', location);
router.use('/blogs', blogs);
// router.use('/comments', comments);
// router.use('/tags', tags);
router.use('/users', users);

module.exports = router;


// api routes
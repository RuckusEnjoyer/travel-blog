const router = require('express').Router();
const {Comment, User} = require('../../models');
const withAuth = require('../../utils/auth');



// // get all comments
// router.get('/', async (req, res) => {
//     try {
//         const commentData = await Comment.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username']
//                 },
//             ],
//         });
//         res.status(200).json(commentData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


//create a comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            blog_id: req.body.blog_id
        });
        console.log(newComment)
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// // get comment by id
// router.get('/:id', async (req, res) => {
//     try {
//         const commentData = await Comment.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username','id']
//                 },
//             ],
//         });

//         if (!commentData) {
//             res.status(404).json({ message: 'No comment found with this id!' });
//             return;
//         }

//         res.status(200).json(commentData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
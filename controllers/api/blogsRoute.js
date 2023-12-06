const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
            location_id: req.body.location_id,
            
        });
        
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
})

// router.put("/:id", withAuth, async (req, res) => {
//     try {
//         const blogData = await Blog.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if (!blogData) {
//             res.status(404).json({ message: "No blog found with this id!" });
//             return;
//         }
//         res.status(200).json(blogData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })



module.exports = router;
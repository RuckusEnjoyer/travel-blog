const router = require("express").Router();
const { Blog, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    console.log(req.body);
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
            
        });
        
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
})

router.put("/:id", withAuth, async (req, res) => {
    try {
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!blogData) {
            res.status(404).json({ message: "No blog found with this id!" });
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/", async (req, res) => {
    try{
        const blogs = await Blog.findAll({
            where: {
                location_id: req.params.id
            }
        }, {
            include: [
                {
                    model: Blog,
                    include: [
                        {
                            model: User
                        },
                        {
                            model: Comment
                        }
                    ]
                },   
            ]
        })
        res.status(200).json(blogs);

    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;
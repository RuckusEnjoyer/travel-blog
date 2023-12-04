const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/user/:username', withAuth, async (req, res) => {
    try {
      const username = req.params.username;
      const blogs = await Blog.findAll({
        where: {
          username: username
        }
      });
      res.json(blogs);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;
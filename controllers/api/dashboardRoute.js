// const router = require("express").Router();
// const { Blog } = require("../../models");
// const User = require('../../models/');
// const withAuth = require("../../utils/auth");

// router.get('/', withAuth, async (req, res) => {
//     try {
//       // const username = req.params.username;
//       const blogs = await Blog.findAll({
//         where: {
//           user_id: req.session.user_id
//         }
//       });
      
//       res.json(blogs);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


//   module.exports = router;
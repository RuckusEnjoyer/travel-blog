const router = require('express').Router();
const { User, Comment, Blog, Location } = require('../models')
const withAuth = require("../utils/auth");

//TO DO: GET to the homepage
router.get('/', async (req, res) => {
    try{
        const blogData = await Blog.findAll({
        })
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('home', {
            blogs,
            logged_in: req.session.logged_in
        })
    } catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})
//TO DO: GET to the Dashboard
router.get('/dashboard',withAuth, async (req, res) => {
    try{
        const blogData = await Blog.findAll({
            where: {
              user_id: req.session.user_id
            },
            include:[{model: User}]
          });
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        const username = req.session.username;
          
        res.render('dashboard', {
            blogs,
            user: { username },
            logged_in: req.session.logged_in,
        })
    } catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})
//TO DO: GET to an individual Post

router.get('/blog', async (req, res) => {
    try{
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['comment_content', 'user_id']
                  }
            ]
        })
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

      

        res.render('blog', {
            blogs,
            logged_in: req.session.logged_in
        })

    } catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})


router.get('/blog/:id', async (req, res) => {
    try{
        const blogData = await Blog.findByPK({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['name', 'comment_content', 'user_id']
                }
            ]
        })
        const blog = blogData.map((blog) => blog.get({ plain: true }));

        res.render('blog_focus', {
            blog,
            logged_in: req.session.logged_in
        })
    } catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})

//GET TO 'SEE LOCATIONS'
router.get('/locations', async (req, res) => {
    try{
        const locationData = await Location.findAll()
        const locations = locationData.map((loc) => loc.get({ plain: true }));

        res.render('locations', {
            locations,
            logged_in: req.session.logged_in
        })
    } catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})

//GET TO ONE SINGLE LOCATION
router.get('/locations/:id', async (req, res) => {

    try{
        const locData = await Location.findByPk(req.params.id, {
            include: [
                {
                    model: Blog,
                    attributes: ['blog_content', 'blog_title', 'user_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['username']
                        },
                        {
                            model: Comment,
                            attributes: ['comment_content', 'user_id'],
                            include: [
                                {
                                    model: User,
                                    attributes: ['username']
                                }
                            ]
                        }
                    ]
                }
            ]
        })
        const locBlog = locData.get({ plain : true })
        // const locationId = req.params.id;
        // const blogData = await Blog.findAll({
        //   where: {
        //     location_id: locationId
        //   },
        //   include: [
        //     {
        //       model: Comment,
        //       attributes: ['comment_content', 'user_id']
        //     }
        //   ]
        // });
        // const blogs = blogData.map((blog) => blog.get({ plain: true }));
       
        res.render('locationFocus', {
            ...locBlog,
        //    ...blogs,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
})



//TO DO: GET to the login
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');

      return;
    }
    res.render('login');
  });
  
//TO DO: logout(?)


router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
      res.render("signup");
  });
module.exports = router;
const router = require('express').Router();
const { User, Comment, Blog, Tag, Location } = require('../models')
const withAuth = require("../utils/auth");
//TO DO: GET to the homepage
router.get('/', async (req, res) => {
    try{
        const locationData = await Location.findAll({
            include: []
        })
        const locations = locationData.map((loc) => loc.get({ plain: true }));

        res.render('home', {
            locations,
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
            }
          });
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('dashboard', {
            blogs,
            logged_in: req.session.logged_in,
            user: User
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
                // {
                //     model: Tag,
                //     attributes: ['name']
                // }
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
                    model: Tag,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes: ['name', 'body', 'user_id']
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
        const locationData = await Location.findAll({
            include: []
        })
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
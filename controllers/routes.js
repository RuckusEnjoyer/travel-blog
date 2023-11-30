const router = require('express').Router();
const { User, Comment, Blog, Tag, Destination } = require('../models')
//TO DO: GET to the homepage
router.get('/', async (req, res) => {
    try{
        const destinationData = await Destination.findAll({
            include: []
        })
        const destinations = destinationData.map((dest) => dest.get({ plain: true }));

        res.render('home', {
            destinations,
            logged_in: req.session.logged_in
        })
    } catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})
//TO DO: GET to the Dashboard
router.get('/dashboard', async (req, res) => {
    try{
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Tag,
                    attributes: ['name']
                }
            ]
        })
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('dashboard', {
            blogs,
            logged_in: req.session.logged_in
        })
    } catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})
//TO DO: GET to an individual Post

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

        res.render('dashboard', {
            blog,
            logged_in: req.session.logged_in
        })
    } catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})

//TO DO: GET to the login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
//TO DO: logout(?)
module.exports = router;
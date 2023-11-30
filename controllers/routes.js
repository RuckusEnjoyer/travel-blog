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

//TO DO: GET to the login

//TO DO: logout(?)
module.exports = router;